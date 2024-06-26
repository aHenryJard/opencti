import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import { graphql } from 'react-relay';
import * as R from 'ramda';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import makeStyles from '@mui/styles/makeStyles';
import { FormikConfig } from 'formik/dist/types';
import { RelayResponsePayload } from 'relay-runtime/lib/store/RelayStoreTypes';
import { useFormatter } from '../../components/i18n';
import useApiMutation from '../../utils/hooks/useApiMutation';

// Deprecated - https://mui.com/system/styles/basics/
// Do not use it for new code.
const useStyles = makeStyles(() => ({
  login: {
    padding: 15,
  },
}));

const loginMutation = graphql`
  mutation LoginFormMutation($input: UserLoginInput!) {
    token(input: $input)
  }
`;

const loginValidation = (t: (v: string) => string) => Yup.object().shape({
  email: Yup.string().required(t('This field is required')),
  password: Yup.string().required(t('This field is required')),
});

interface LoginFormValues {
  email: string;
  password: string;
}

interface RelayResponseError extends Error {
  res?: RelayResponsePayload;
}

const FLASH_COOKIE = 'opencti_flash';
const LoginForm = () => {
  const classes = useStyles();
  const { t_i18n } = useFormatter();
  const [cookies, , removeCookie] = useCookies([FLASH_COOKIE]);
  const flashError = cookies[FLASH_COOKIE] || '';
  removeCookie(FLASH_COOKIE);
  const [commitLoginMutation] = useApiMutation(loginMutation);
  const onSubmit: FormikConfig<LoginFormValues>['onSubmit'] = (
    values,
    { setSubmitting, setErrors },
  ) => {
    commitLoginMutation({
      variables: {
        input: values,
      },
      onError: (error: RelayResponseError) => {
        const errorMessage = t_i18n(
          error.res?.errors?.at?.(0)?.message ?? 'Unknown',
        );
        setErrors({ email: errorMessage });
        setSubmitting(false);
      },
      onCompleted: () => {
        window.location.reload();
      },
    });
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={classes.login}>
      <Formik
        initialValues={initialValues}
        initialTouched={{ email: !R.isEmpty(flashError) }}
        initialErrors={{ email: !R.isEmpty(flashError) ? t_i18n(flashError) : '' }}
        validationSchema={loginValidation(t_i18n)}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              label={t_i18n('Login')}
              fullWidth={true}
            />
            <Field
              component={TextField}
              name="password"
              label={t_i18n('Password')}
              type="password"
              fullWidth={true}
              style={{ marginTop: 20 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid}
              style={{ marginTop: 30 }}
            >
              {t_i18n('Sign in')}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
