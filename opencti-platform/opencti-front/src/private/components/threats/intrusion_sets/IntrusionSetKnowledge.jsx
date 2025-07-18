import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { graphql, useFragment } from 'react-relay';
import useAuth from '../../../../utils/hooks/useAuth';
import { getRelationshipTypesForEntityType } from '../../../../utils/Relation';
import EntityStixCoreRelationships from '../../common/stix_core_relationships/EntityStixCoreRelationships';
import StixDomainObjectThreatKnowledge from '../../common/stix_domain_objects/StixDomainObjectThreatKnowledge';
import StixCoreRelationship from '../../common/stix_core_relationships/StixCoreRelationship';
import StixDomainObjectAttackPatterns from '../../common/stix_domain_objects/StixDomainObjectAttackPatterns';
import StixDomainObjectVictimology from '../../common/stix_domain_objects/StixDomainObjectVictimology';
import EntityStixSightingRelationships from '../../events/stix_sighting_relationships/EntityStixSightingRelationships';
import StixSightingRelationship from '../../events/stix_sighting_relationships/StixSightingRelationship';
import EntityStixCoreRelationshipsIndicators from '../../common/stix_core_relationships/views/indicators/EntityStixCoreRelationshipsIndicators';
import EntityStixCoreRelationshipsStixCyberObservable from '../../common/stix_core_relationships/views/stix_cyber_observable/EntityStixCoreRelationshipsStixCyberObservable';

const IntrusionSetKnowledgeFragment = graphql`
  fragment IntrusionSetKnowledge_intrusionSet on IntrusionSet {
    id
    name
    aliases
    first_seen
    last_seen
    entity_type
  }
`;

const IntrusionSetKnowledgeComponent = ({
  intrusionSetData,
}) => {
  const intrusionSet = useFragment(
    IntrusionSetKnowledgeFragment,
    intrusionSetData,
  );
  const location = useLocation();
  const link = `/dashboard/threats/intrusion_sets/${intrusionSet.id}/knowledge`;
  const { schema } = useAuth();
  const allRelationshipsTypes = getRelationshipTypesForEntityType(intrusionSet.entity_type, schema);

  return (
    <>
      <Routes>
        <Route
          path="/relations/:relationId"
          element={
            <StixCoreRelationship
              entityId={intrusionSet.id}
              paddingRight={true}
            />
          }
        />
        <Route
          path="/sightings/:sightingId"
          element={
            <StixSightingRelationship
              entityId={intrusionSet.id}
              paddingRight={true}
            />
          }
        />
        <Route
          path="/overview"
          element={
            <StixDomainObjectThreatKnowledge
              stixDomainObjectId={intrusionSet.id}
              stixDomainObjectName={intrusionSet.name}
              stixDomainObjectType="Intrusion-Set"
            />
          }
        />
        <Route
          path="/all"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={allRelationshipsTypes}
              entityLink={link}
              defaultStartTime={intrusionSet.startTime}
              defaultStopTime={intrusionSet.stopTime}
              allDirections
            />
          }
        />
        <Route
          path="/related"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['related-to']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              allDirections
            />
          }
        />
        <Route
          path="/attribution"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['attributed-to']}
              stixCoreObjectTypes={['Threat-Actor']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
            />
          }
        />
        <Route
          path="/victimology"
          element={
            <StixDomainObjectVictimology
              stixDomainObjectId={intrusionSet.id}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
            />
          }
        />
        <Route
          path="/campaigns"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['attributed-to']}
              stixCoreObjectTypes={['Campaign']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={true}
            />
          }
        />
        <Route
          path="/attack_patterns"
          element={
            <StixDomainObjectAttackPatterns
              stixDomainObjectId={intrusionSet.id}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              entityType={intrusionSet.entity_type}
            />
          }
        />
        <Route
          path="/malwares"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['uses', 'authored-by']}
              stixCoreObjectTypes={['Malware']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
              allDirections
            />
          }
        />
        <Route
          path="/tools"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['uses']}
              stixCoreObjectTypes={['Tool']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
            />
          }
        />
        <Route
          path="/channels"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['uses', 'belongs-to']}
              stixCoreObjectTypes={['Channel']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
              allDirections
            />
          }
        />
        <Route
          path="/narratives"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['uses']}
              stixCoreObjectTypes={['Narrative']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
            />
          }
        />
        <Route
          path="/vulnerabilities"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['targets']}
              stixCoreObjectTypes={['Vulnerability']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
            />
          }
        />
        <Route
          path="/incidents"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['attributed-to']}
              stixCoreObjectTypes={['Incident']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={true}
            />
          }
        />
        <Route
          path="/indicators"
          element={
            <EntityStixCoreRelationshipsIndicators
              entityId={intrusionSet.id}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
            />
          }
        />
        <Route
          path="/observables"
          element={
            <EntityStixCoreRelationshipsStixCyberObservable
              entityId={intrusionSet.id}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={true}
              relationshipTypes={['related-to']}
            />
          }
        />
        <Route
          path="/infrastructures"
          element={
            <EntityStixCoreRelationships
              key={location.pathname}
              entityId={intrusionSet.id}
              relationshipTypes={['uses', 'compromises']}
              stixCoreObjectTypes={['Infrastructure']}
              entityLink={link}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              isRelationReversed={false}
            />
          }
        />
        <Route
          path="/sightings"
          element={
            <EntityStixSightingRelationships
              entityId={intrusionSet.id}
              entityLink={link}
              noRightBar={true}
              defaultStartTime={intrusionSet.first_seen}
              defaultStopTime={intrusionSet.last_seen}
              stixCoreObjectTypes={[
                'Region',
                'Country',
                'City',
                'Position',
                'Sector',
                'Organization',
                'Individual',
                'System',
              ]}
            />
          }
        />
      </Routes>
    </>
  );
};

export default IntrusionSetKnowledgeComponent;
