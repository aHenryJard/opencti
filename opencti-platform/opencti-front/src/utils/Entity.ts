export const resolveLink = (type: string): string | null => {
  switch (type) {
    case 'Attack-Pattern':
      return '/dashboard/arsenal/attack_patterns';
    case 'Campaign':
      return '/dashboard/threats/campaigns';
    case 'Note':
      return '/dashboard/analysis/notes';
    case 'Observed-Data':
      return '/dashboard/events/observed_data';
    case 'Opinion':
      return '/dashboard/analysis/opinions';
    case 'Report':
      return '/dashboard/analysis/reports';
    case 'Grouping':
      return '/dashboard/analysis/groupings';
    case 'Course-Of-Action':
      return '/dashboard/arsenal/courses_of_action';
    case 'Individual':
      return '/dashboard/entities/individuals';
    case 'Organization':
      return '/dashboard/entities/organizations';
    case 'Sector':
      return '/dashboard/entities/sectors';
    case 'System':
      return '/dashboard/entities/systems';
    case 'Event':
      return '/dashboard/entities/events';
    case 'Indicator':
      return '/dashboard/observations/indicators';
    case 'Infrastructure':
      return '/dashboard/observations/infrastructures';
    case 'Intrusion-Set':
      return '/dashboard/threats/intrusion_sets';
    case 'City':
      return '/dashboard/entities/cities';
    case 'Country':
      return '/dashboard/entities/countries';
    case 'Region':
      return '/dashboard/entities/regions';
    case 'Position':
      return '/dashboard/entities/positions';
    case 'Malware':
      return '/dashboard/arsenal/malwares';
    case 'Threat-Actor':
      return '/dashboard/threats/threat_actors';
    case 'Tool':
      return '/dashboard/arsenal/tools';
    case 'Channel':
      return '/dashboard/arsenal/channels';
    case 'Narrative':
      return '/dashboard/arsenal/narratives';
    case 'Language':
      return '/dashboard/arsenal/narratives/languages';
    case 'Vulnerability':
      return '/dashboard/arsenal/vulnerabilities';
    case 'Incident':
      return '/dashboard/events/incidents';
    case 'Artifact':
      return '/dashboard/observations/artifacts';
    case 'Stix-Cyber-Observable':
    case 'Autonomous-System':
    case 'Directory':
    case 'Domain-Name':
    case 'Email-Addr':
    case 'Email-Message':
    case 'Email-Mime-Part-Type':
    case 'StixFile':
    case 'X509-Certificate':
    case 'IPv4-Addr':
    case 'IPv6-Addr':
    case 'Mac-Addr':
    case 'Mutex':
    case 'Network-Traffic':
    case 'Process':
    case 'Software':
    case 'Url':
    case 'User-Account':
    case 'Windows-Registry-Key':
    case 'Windows-Registry-Value-Type':
    case 'Cryptographic-Key':
    case 'Cryptocurrency-Wallet':
    case 'Hostname':
    case 'Text':
    case 'User-Agent':
    case 'Bank-Account':
    case 'Phone-Number':
    case 'Payment-Card':
    case 'Media-Content':
      return '/dashboard/observations/observables';
    default:
      return null;
  }
};

export const typesWithoutName = ['Observed-Data'];

export const typesContainers = [
  'report',
  'note',
  'opinion',
  'observed-data',
  'grouping',
];

export const pascalize = (str: string): string => str.replace(
  /(\w)(\w*)/g,
  (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase(),
);

export const resolveIdentityClass = (identityType: string) : string => {
  if (identityType === 'Individual') {
    return 'individual';
  }
  if (identityType === 'Sector') {
    return 'class';
  }
  if (identityType === 'System') {
    return 'system';
  }
  return 'organization';
};

export const resolveIdentityType = (identityClass: string) : string => {
  if (identityClass === 'individual') {
    return 'Individual';
  }
  if (identityClass === 'class') {
    return 'Sector';
  }
  if (identityClass === 'system') {
    return 'System';
  }
  return 'Organization';
};

export const resolveLocationType = (entity: { [k:string] : string }) : string => {
  if (entity.x_opencti_location_type) {
    return entity.x_opencti_location_type;
  }
  if (entity.city) {
    return 'City';
  }
  if (entity.country) {
    return 'Country';
  }
  if (entity.region) {
    return 'Region';
  }
  return 'Position';
};

export const openVocabularies: { [k: string]: Array<{ key: string, description: string }> } = {
  'malware-type-ov': [
    {
      key: 'adware',
      description:
        'Any software that is funded by advertising. Adware may also gather sensitive user information from a system.',
    },
    {
      key: 'backdoor',
      description:
        'A malicious program that allows an attacker to perform actions on a remote system, such as transferring files, acquiring passwords, or executing arbitrary commands [NIST800-83].',
    },
    {
      key: 'bot',
      description:
        'A program that resides on an infected system, communicating with and forming part of a botnet. The bot may be implanted by a worm or Trojan, which opens a backdoor. The bot then monitors the backdoor for further instructions.',
    },
    {
      key: 'bootkit',
      description:
        'A malicious program which targets the Master Boot Record of the target computer.',
    },
    {
      key: 'ddos',
      description:
        'A program that is used to perform a distributed denial of service attack.',
    },
    {
      key: 'downloader',
      description:
        'A small trojan file programmed to download and execute other files, usually more complex malware.',
    },
    {
      key: 'dropper',
      description:
        'A type of trojan that deposits an enclosed payload (generally, other malware) onto the target computer.',
    },
    {
      key: 'exploit-kit',
      description: 'A software toolkit to target common vulnerabilities.',
    },
    {
      key: 'keylogger',
      description:
        'A type of malware that surreptitiously monitors keystrokes and either records them for later retrieval or sends them back to a central collection point.',
    },
    {
      key: ' ransomware',
      description:
        "A type of malware that encrypts files on a victim's system, demanding payment of ransom in return for the access codes required to unlock files.",
    },
    {
      key: 'remote-access-trojan',
      description:
        'A remote access trojan program (or RAT), is a trojan horse capable of controlling a machine through commands issued by a remote attacker.',
    },
    {
      key: 'resource-exploitation',
      description:
        "A type of malware that steals a system's resources (e.g., CPU cycles), such as a malicious bitcoin miner.",
    },
    {
      key: 'rogue-security-software',
      description:
        'A fake security product that demands money to clean phony infections.',
    },
    {
      key: 'rootkit',
      description:
        'A type of malware that hides its files or processes from normal methods of monitoring in order to conceal its presence and activities. Rootkits can operate at a number of levels, from the application level — simply replacing or adjusting the settings of system software to prevent the display of certain information — through hooking certain functions or inserting modules or drivers into the operating system kernel, to the deeper level of firmware or virtualization rootkits, which are activated before the operating system and thus even harder to detect while the system is running.',
    },
    {
      key: 'screen-capture',
      description:
        'A type of malware used to capture images from the target systems screen, used for exfiltration and command and control.',
    },
    {
      key: 'spyware',
      description:
        "Software that gathers information on a user's system without their knowledge and sends it to another party. Spyware is generally used to track activities for the purpose of delivering advertising.",
    },
    {
      key: 'trojan',
      description:
        'Any malicious computer program which is used to hack into a computer by misleading users of its true intent.',
    },
    {
      key: 'unknown',
      description:
        'There is not enough information available to determine the type of malware.',
    },
    {
      key: 'virus',
      description:
        'A malicious computer program that replicates by reproducing itself or infecting other programs by modifying them.',
    },
    {
      key: 'webshell',
      description:
        'A malicious script used by an attacker with the intent to escalate and maintain persistent access on an already compromised web application.',
    },
    {
      key: 'wiper',
      description:
        'A piece of malware whose primary aim is to delete files or entire disks on a machine.',
    },
    {
      key: 'worm',
      description:
        'A self-replicating, self-contained program that usually executes itself without user intervention.',
    },
  ],
  'event-type-ov': [
    {
      key: 'conference',
      description: 'Conference.',
    },
    {
      key: 'financial',
      description: 'Significant financial event.',
    },
    {
      key: 'holiday',
      description: 'Holiday, festival, time of observance.',
    },
    {
      key: 'international-summit',
      description: 'Internationals summit.',
    },
    {
      key: 'local-election',
      description: 'Local election.',
    },
    {
      key: 'national-election',
      description: 'National election.',
    },
    {
      key: 'sport-competition',
      description: 'Sport competition.',
    },
  ],
  'processor-architecture-ov': [
    {
      key: 'alpha',
      description: 'Specifies the Alpha architecture.',
    },
    {
      key: 'arm',
      description: 'Specifies the ARM architecture.',
    },
    {
      key: 'ia-64',
      description: 'Specifies the 64-bit IA (Itanium) architecture.',
    },
    {
      key: 'mips',
      description: 'Specifies the MIPS architecture.',
    },
    {
      key: 'powerpc',
      description: 'Specifies the PowerPC architecture.',
    },
    {
      key: 'sparc',
      description: 'Specifies the SPARC architecture.',
    },
    {
      key: 'x86',
      description: 'Specifies the 32-bit x86 architecture.',
    },
    {
      key: 'x86-64',
      description: 'Specifies the 64-bit x86 architecture.',
    },
  ],
  'implementation-language-ov': [
    {
      key: 'applescript',
      description: 'Specifies the AppleScript programming language.',
    },
    {
      key: 'bash',
      description: 'Specifies the Bash programming language.',
    },
    {
      key: 'c',
      description: 'Specifies the C programming language.',
    },
    {
      key: 'c++',
      description: 'Specifies the C++ programming language.',
    },
    {
      key: 'c#',
      description: 'Specifies the C# programming language.',
    },
    {
      key: 'go',
      description:
        'Specifies the Go (sometimes referred to as golang) programming language.',
    },
    {
      key: 'java',
      description: 'Specifies the JAVA programming language.',
    },
    {
      key: 'javascript',
      description: 'Specifies the JavaScript programming language.',
    },
    {
      key: 'lua',
      description: 'Specifies the Lua programming language.',
    },
    {
      key: 'objective-c',
      description: 'Specifies the Objective-C programming language.',
    },
    {
      key: 'perl',
      description: 'Specifies the Perl programming language.',
    },
    {
      key: 'php',
      description: 'Specifies the PHP programming language.',
    },
    {
      key: 'powershell',
      description: 'Specifies the Windows Powershell programming language.',
    },
    {
      key: 'python',
      description: 'Specifies the Python programming language.',
    },
    {
      key: 'ruby',
      description: 'Specifies the Ruby programming language.',
    },
    {
      key: 'rust',
      description: 'Specifies the Rust programming language.',
    },
    {
      key: 'scala',
      description: 'Specifies the Scala programming language.',
    },
    {
      key: 'swift',
      description: 'Specifies the Swift programming language.',
    },
    {
      key: 'typescript',
      description: 'Specifies the TypeScript programming language.',
    },
    {
      key: 'visual-basic',
      description: 'Specifies the Visual Basic programming language.',
    },
    {
      key: 'x86-32',
      description: 'Specifies the x86 32-bit Assembly programming language.',
    },
    {
      key: 'x86-64',
      description: 'Specifies the x86 64-bit Assembly programming language.',
    },
  ],
  'malware-capabilities-ov': [
    {
      key: 'accesses-remote-machines',
      description:
        'Indicates that the malware instance or family is able to access one or more remote machines.',
    },
    {
      key: 'anti-debugging',
      description:
        'Indicates that the malware instance or family is able to prevent itself from being debugged and/or from being run in a debugger or is able to make debugging more difficult.',
    },
    {
      key: 'anti-disassembly',
      description:
        'Indicates that the malware instance or family is able to prevent itself from being disassembled or make disassembly more difficult.',
    },

    {
      key: 'anti-emulation',
      description:
        'Indicates that the malware instance or family is able to prevent its execution inside of an emulator or is able to make emulation more difficult.',
    },
    {
      key: 'anti-memory-forensics',
      description:
        'Indicates that the malware instance or family is able to prevent or make memory forensics more difficult.',
    },
    {
      key: 'anti-sandbox',
      description:
        'Indicates that the malware instance or family is able to prevent sandbox-based behavioral analysis or make it more difficult.',
    },
    {
      key: 'anti-vm',
      description:
        'Indicates that the malware instance or family is able to prevent virtual machine (VM) based behavioral analysis or make it more difficult.',
    },
    {
      key: 'captures-input-peripherals',
      description:
        "Indicates that the malware instance or family is able to capture data from a system's input peripheral devices, such as a keyboard or mouse. This includes things like keylogging.",
    },
    {
      key: 'captures-output-peripherals',
      description:
        "Indicates that the malware instance or family captures data sent to a system's output peripherals, such as a display. Examples include things like screen scraping.",
    },
    {
      key: 'captures-system-state-data',
      description:
        "Indicates that the malware instance or family is able to capture information about a system's state (e.g., data currently in its RAM).",
    },
    {
      key: 'cleans-traces-of-infection',
      description:
        'Indicates that the malware instance or family is able to clean traces of its infection (e.g., file system artifacts) from a system.',
    },
    {
      key: 'commits-fraud',
      description:
        'Indicates that the malware instance or family commits fraud, such as click fraud (for example).',
    },
    {
      key: 'communicates-with-c2',
      description:
        'Indicates that the malware instance or family is able to communicate (i.e., send or receive data) with a command and control (C2) server.',
    },
    {
      key: 'compromises-data-availability',
      description:
        'Indicates that the malware instance or family is able to compromise the availability of data on the local system on which it is executing and/or one or more remote systems. For example, encrypting data on disk, as done by ransomware.',
    },
    {
      key: 'compromises-data-integrity',
      description:
        'Indicates that the malware instance or family is able to compromise the integrity of some data that resides on (e.g., in the case of files) or is received/transmitted (e.g., in the case of network traffic) by the system on which it is executing.',
    },
    {
      key: 'compromises-system-availability',
      description:
        'Indicates that the malware instance or family is able to consume system resources for its malicious purposes, such as password cracking or participating in a DDoS botnet, thereby compromising the availability of the local system and/or one or more remote systems.',
    },
    {
      key: 'controls-local-machine',
      description:
        'Indicates that the malware instance or family is able to control the machine on which it is executing (e.g., RATs).',
    },
    {
      key: 'degrades-security-software',
      description:
        'Indicates that the malware instance or family is able to bypass or disable security programs or operating system security features on a system (including mobile devices), either by stopping them from executing or by making changes to their code or configuration parameters. For example, malware that blocks the local machine from accessing the websites of security vendors.',
    },
    {
      key: 'degrades-system-updates',
      description:
        'Indicates that the malware instance or family is able to disable the downloading and installation of system updates and patches.',
    },
    {
      key: 'determines-c2-server',
      description:
        'Indicates that the malware instance or family is able to identify one or more command and control (C2) servers with which to communicate (e.g., DGA).',
    },
    {
      key: 'emails-spam',
      description:
        'Indicates that the malware instance or family is able to send spam email messages.',
    },
    {
      key: 'escalates-privileges',
      description:
        'Indicates that the malware instance or family is able to escalate the privileges under which it is executing.',
    },
    {
      key: 'evades-av',
      description:
        'Indicates that the malware instance or family is able to evade detection by antivirus tools.',
    },
    {
      key: 'exfiltrates-data',
      description:
        'Indicates that the malware instance or family is able to gather, prepare, (possibly obfuscate) data and transmit it to exfiltration points.',
    },
    {
      key: 'fingerprints-host',
      description:
        'Indicates that the malware instance or family is able to fingerprint or probe the configuration of the host system on which it is executing for the purpose of altering its behavior based on this environment.',
    },
    {
      key: 'hides-artifacts',
      description:
        'Indicates that the malware instance or family is able to hide its artifacts, such as files and open ports.',
    },
    {
      key: 'hides-executing-code',
      description:
        'Indicates that the malware instance or family is able to hide its code by compromising the bootloader, kernel modules, hypervisor, etc.',
    },
    {
      key: 'infects-files',
      description:
        'Indicates that the malware instance or family is able to infect one or more files on the system on which it executes. For example, malware which injects a malicious payload into all PDFs on a host as a means of propagation.',
    },
    {
      key: 'infects-remote-machines',
      description:
        'Indicates that the malware instance or family is able to self-propagate to a remote machine or infect a remote machine with malware that is different than itself.',
    },
    {
      key: 'installs-other-components',
      description:
        'Indicates that the malware instance or family is able to install additional components. This encompasses the dropping/downloading of other malicious components such as libraries, other malware, and tools.',
    },
    {
      key: 'persists-after-system-reboot',
      description:
        'Indicates that the malware instance or family is able to continue executing after the reboot of the system on which it is resident.',
    },
    {
      key: 'prevents-artifact-access',
      description:
        'Indicates that the malware instance or family is able to prevent its artifacts (e.g., files, registry keys, etc.) from being accessed.',
    },
    {
      key: 'prevents-artifact-deletion',
      description:
        'Indicates that the malware instance or family is able to prevent its artifacts (e.g., files, registry keys, etc.) from being deleted.',
    },
    {
      key: 'probes-network-environment',
      description:
        'Indicates that the malware instance or family is able to probe the properties of its network environment, e.g. to determine whether it funnels traffic through a proxy.',
    },
    {
      key: 'self-modifies',
      description:
        'Indicates that the malware instance or family is able to modify itself.',
    },
    {
      key: 'steals-authentication-credentials',
      description:
        'Indicates that the malware instance is able to steal authentication credentials.',
    },
    {
      key: 'violates-system-operational-integrity',
      description:
        'Indicates that the malware instance or family is able to compromise the operational integrity of the system on which it is executing and/or one or more remote systems, e.g., by causing them to operate beyond their set of specified operational parameters. For example, malware that causes the CPU fan on the machine that it is executing to spin at a higher than normal speed.',
    },
  ],
  'attack-resource-level-ov': [
    {
      key: 'individual',
      description:
        'Resources limited to the average individual; Threat Actor acts independently.',
    },
    {
      key: 'club',
      description:
        'Members interact on a social and volunteer basis, often with little personal interest in the specific target. An example might be a core group of unrelated activists who regularly exchange tips on a particular blog. Group persists long term.',
    },
    {
      key: 'contest',
      description:
        'A short-lived and perhaps anonymous interaction that concludes when the participants have achieved a single goal. For example, people who break into systems just for thrills or prestige may hold a contest to see who can break into a specific target first. It also includes announced "operations" to achieve a specific goal, such as the original "OpIsrael" call for volunteers to disrupt all of Israel\'s Internet functions for a day.',
    },
    {
      key: 'team',
      description:
        'A formally organized group with a leader, typically motivated by a specific goal and organized around that goal. Group persists long term and typically operates within a single geography.',
    },
    {
      key: 'organization',
      description:
        'Larger and better resourced than a team; typically, a company or crime syndicate. Usually operates in multiple geographic areas and persists long term.',
    },
    {
      key: 'government',
      description:
        'Controls public assets and functions within a jurisdiction; very well resourced and persists long term.',
    },
  ],
  'attack-motivation-ov': [
    {
      key: 'accidental',
      description:
        'A non-hostile actor whose benevolent or harmless intent inadvertently causes harm. For example, a well-meaning and dedicated employee who through distraction or poor training unintentionally causes harm to his or her organization.',
    },
    {
      key: 'coercion',
      description:
        "Being forced to act on someone else's behalf. Adversaries who are motivated by coercion are often forced through intimidation or blackmail to act illegally for someone else’s benefit. Unlike the other motivations, a coerced person does not act for personal gain, but out of fear of incurring a loss.",
    },
    {
      key: 'dominance',
      description:
        'A desire to assert superiority over someone or something else. Adversaries who are seeking dominance over a target are focused on using their power to force their target into submission or irrelevance. Dominance may be found with ideology in some state-sponsored attacks and with notoriety in some cyber vandalism-based attacks.',
    },
    {
      key: 'ideology',
      description:
        'A passion to express a set of ideas, beliefs, and values that may shape and drive harmful and illegal acts. Adversaries who act for ideological reasons (e.g., political, religious, human rights, environmental, desire to cause chaos/anarchy, etc.) are not usually motivated primarily by the desire for profit; they are acting on their own sense of morality, justice, or political loyalty. For example, an activist group may sabotage a company’s equipment because they believe the company is harming the environment.',
    },
    {
      key: 'notoriety',
      description:
        'Seeking prestige or to become well known through some activity. Adversaries motivated by notoriety are often seeking either personal validation or respect within a community and staying covert is not a priority. In fact, one of the main goals is to garner the respect of their target audience.',
    },
    {
      key: 'organizational-gain',
      description:
        'Seeking advantage over a competing organization, including a military organization. Adversaries motivated by increased profit or other gains through an unfairly obtained competitive advantage are often seeking theft of intellectual property, business processes, or supply chain agreements and thus accelerating their position in a market or capability.',
    },
    {
      key: 'personal-gain',
      description:
        'The desire to improve one’s own financial status. Adversaries motivated by a selfish desire for personal gain are often out for gains that come from financial fraud, hacking for hire, or intellectual property theft. While a Threat Actor or Intrusion Set may be seeking personal gain, this does not mean they are acting alone. Individuals can band together solely to maximize their own personal profits.',
    },
    {
      key: 'personal-satisfaction',
      description:
        'A desire to satisfy a strictly personal goal, including curiosity, thrill-seeking, amusement, etc. Threat Actors or Intrusion Set driven by personal satisfaction may incidentally receive some other gain from their actions, such as a profit, but their primary motivation is to gratify a personal, emotional need. Individuals can band together with others toward a mutual, but not necessarily organizational, objective.',
    },
    {
      key: 'revenge',
      description:
        'A desire to avenge perceived wrongs through harmful actions such as sabotage, violence, theft, fraud, or embarrassing certain individuals or the organization. A disgruntled Threat Actor or Intrusion Set seeking revenge can include current or former employees, who may have extensive knowledge to leverage when conducting attacks. Individuals can band together with others if the individual believes that doing so will enable them to cause more harm.',
    },
    {
      key: 'unpredictable',
      description:
        'Acting without identifiable reason or purpose and creating unpredictable events. Unpredictable is not a miscellaneous or default category. Unpredictable means a truly random and likely bizarre event, which seems to have no logical purpose to the victims.',
    },
  ],
  'indicator-type-ov': [
    {
      key: 'anomalous-activity',
      description:
        'Unexpected, or unusual activity that may not necessarily be malicious or indicate compromise. This type of activity may include reconnaissance-like behavior such as port scans or version identification, network behavior anomalies, and asset and/or user behavioral anomalies.',
    },
    {
      key: 'anonymization',
      description:
        'Suspected anonymization tools or infrastructure (proxy, TOR, VPN, etc.).',
    },
    {
      key: 'benign',
      description:
        'Activity that is not suspicious or malicious in and of itself, but when combined with other activity may indicate suspicious or malicious behavior.',
    },
    {
      key: 'compromised',
      description: 'Assets that are suspected to be compromised.',
    },
    {
      key: 'malicious-activity',
      description: 'Patterns of suspected malicious objects and/or activity.',
    },
    {
      key: 'attribution',
      description:
        'Patterns of behavior that indicate attribution to a particular Threat Actor or Campaign.',
    },
    {
      key: 'unknown',
      description:
        'There is not enough information available to determine the type of indicator.',
    },
  ],
  'infrastructure-type-ov': [
    {
      key: 'amplification',
      description:
        'Specifies infrastructure used for conducting amplification attacks.',
    },
    {
      key: 'anonymization',
      description:
        'Specific infrastructure used for anonymization, such as a proxy.',
    },
    {
      key: 'botnet',
      description:
        'Specifies the membership/makeup of a botnet, in terms of the network addresses of the hosts that comprise the botnet.',
    },
    {
      key: 'command-and-control',
      description:
        'Specifies infrastructure used for command and control (C2). This is typically a domain name or IP address.',
    },
    {
      key: 'control-system',
      description:
        'Specifies equipment such as IoT, HMI, RTU, PLC or other ICS devices.',
    },
    {
      key: 'exfiltration',
      description:
        'Specifies infrastructure used as an endpoint for data exfiltration.',
    },
    {
      key: 'firewall',
      description:
        'Specifies a device that inspects network traffic and restricts it based upon defined policies.',
    },
    {
      key: 'hosting-malware',
      description: 'Specifies infrastructure used for hosting malware.',
    },
    {
      key: 'hosting-target-lists',
      description:
        'Specifies infrastructure used for hosting a list of targets for DDOS attacks, phishing, and other malicious activities. This is typically a domain name or IP address.',
    },
    {
      key: 'phishing',
      description:
        'Specifies infrastructure used for conducting phishing attacks.',
    },
    {
      key: 'reconnaissance',
      description:
        'Specifies infrastructure used for conducting reconnaissance activities.',
    },
    {
      key: 'routers-switches',
      description:
        'Specifies IT infrastructure used to connect devices to the network.',
    },
    {
      key: 'staging',
      description:
        'Specifies infrastructure used for hosting a list of targets for DDOS attacks, phishing, and other malicious activities. This is typically a domain name or IP address.',
    },
    {
      key: 'workstation',
      description:
        'Specifies an endpoint machine used for work by an organization that needs protection.',
    },
    {
      key: 'unknown',
      description: 'Specifies an infrastructure of some unknown type.',
    },
  ],
  'threat-actor-role-ov': [
    {
      key: 'agent',
      description:
        'Threat actor executes attacks either on behalf of themselves or at the direction of someone else.',
    },
    {
      key: 'director',
      description:
        'The threat actor who directs the activities, goals, and objectives of the malicious activities.',
    },
    {
      key: 'independent',
      description: 'A threat actor acting by themselves.',
    },
    {
      key: 'infrastructure-architect',
      description: 'Someone who designs the battle space.',
    },
    {
      key: 'infrastructure-operator',
      description:
        'The threat actor who provides and supports the attack infrastructure that is used to deliver the attack (botnet providers, cloud services, etc.).',
    },
    {
      key: 'malware-author',
      description:
        'The threat actor who authors malware or other malicious tools.',
    },
    {
      key: 'sponsor',
      description: 'The threat actor who funds the malicious activities.',
    },
  ],
  'threat-actor-sophistication-ov': [
    {
      key: 'none',
      description:
        'Can carry out random acts of disruption or destruction by running tools they do not understand. Actors in this category have average computer skills.',
    },
    {
      key: 'minimal',
      description:
        'Can minimally use existing and frequently well known and easy-to-find techniques and programs or scripts to search for and exploit weaknesses in other computers. Commonly referred to as a script-kiddie.',
    },
    {
      key: 'intermediate',
      description:
        'Can proficiently use existing attack frameworks and toolkits to search for and exploit vulnerabilities in computers or systems. Actors in this category have computer skills equivalent to an IT professional and typically have a working knowledge of networks, operating systems, and possibly even defensive techniques and will typically exhibit some operational security.',
    },
    {
      key: 'advanced',
      description:
        'Can develop their own tools or scripts from publicly known vulnerabilities to target systems and users. Actors in this category are very adept at IT systems and have a background in software development along with a solid understanding of defensive techniques and operational security.\n\nThese actors rely on others to find and identify weaknesses and vulnerabilities in systems, but are able to create their own tools, delivery mechanisms, and execution strategies.',
    },
    {
      key: 'expert',
      description:
        'Can focus on the discovery and use of unknown malicious code, are is adept at installing user and kernel mode rootkits, frequently use data mining tools, target corporate executives and key users (government and industry) for the purpose of stealing personal and corporate data. Actors in this category are very adept at IT systems and software development and are experts with security systems, defensive techniques, attack methods, and operational security.',
    },
    {
      key: 'innovator',
      description:
        'Typically, criminal or state actors who are organized, highly technical, proficient, well-funded professionals working in teams to discover new vulnerabilities and develop exploits.\n\nDemonstrates sophisticated capability. An innovator has the ability to create and script unique programs and codes targeting virtually any form of technology. At this level, this actor has a deep knowledge of networks, operating systems, programming languages, firmware, and infrastructure topologies and will demonstrate operational security when conducting his activities. Innovators are largely responsible for the discovery of 0-day vulnerabilities and the development of new attack techniques.',
    },
    {
      key: 'strategic',
      description:
        'State actors who create vulnerabilities through an active program to "influence" commercial products and services during design, development or manufacturing, or with the ability to impact products while in the supply chain to enable exploitation of networks and systems of interest.',
    },
  ],
  'grouping-context-ov': [
    {
      key: 'suspicious-activity',
      description:
        'A set of STIX content related to a particular suspicious activity event.',
    },
    {
      key: 'malware-analysis',
      description:
        'A set of STIX content related to a particular malware instance or family.',
    },
    {
      key: 'unspecified',
      description:
        'A set of STIX content contextually related but without any precise characterization of the contextual relationship between the objects.',
    },
  ],
  'integrity_level-ov': [
    { key: 'low', description: 'A low level of integrity.' },
    { key: 'medium', description: 'A medium level of integrity.' },
    { key: 'high', description: 'A high level of integrity.' },
    { key: 'system', description: 'A system level of integrity.' },
  ],
  'start_type-ov': [
    { key: 'SERVICE_AUTO_START', description: 'A service started automatically by the service control manager during system startup.' },
    { key: 'SERVICE_BOOT_START', description: 'A device driver started by the system loader. This value is valid only for driver services.' },
    { key: 'SERVICE_DEMAND_START', description: 'A service started by the service control manager when a process calls the StartService function.' },
    { key: 'SERVICE_DISABLED', description: 'A service that cannot be started. Attempts to start the service result in the error code ERROR_SERVICE_DISABLED.' },
    { key: 'SERVICE_SYSTEM_ALERT', description: 'A device driver started by the IoInitSystem function. This value is valid only for driver services.' },
  ],
  'service_type-ov': [
    { key: 'SERVICE_KERNEL_DRIVER', description: 'The service is a device driver.' },
    { key: 'SERVICE_FILE_SYSTEM_DRIVER', description: 'The service is a file system driver.' },
    { key: 'SERVICE_WIN32_OWN_PROCESS', description: 'The service runs in its own process.' },
    { key: 'SERVICE_WIN32_SHARE_PROCESS', description: 'The service shares a process with other services.' },
  ],
  'service_status-ov': [
    { key: 'SERVICE_CONTINUE_PENDING', description: 'The service continue is pending.' },
    { key: 'SERVICE_PAUSE_PENDING', description: 'The service pause is pending.' },
    { key: 'SERVICE_PAUSED', description: 'The service is paused.' },
    { key: 'SERVICE_RUNNING', description: 'The service is running.' },
    { key: 'SERVICE_START_PENDING', description: 'The service is starting.' },
    { key: 'SERVICE_STOP_PENDING', description: 'The service is stopping.' },
    { key: 'SERVICE_STOPPED', description: 'The service is not running.' },
  ],
};

export const ignoredAttributes = [
  'internal_id',
  'standard_id',
  'x_opencti_description',
  'x_opencti_stix_ids',
  'entity_type',
  'spec_version',
  'extensions',
  'created',
  'modified',
  'created_at',
  'x_opencti_score',
  'updated_at',
  'observable_value',
  'indicators',
  'importFiles',
  'startup_info',
];

export const workbenchAttributes = [
  'name',
  'description',
  'pattern',
  'x_opencti_description',
  'first_seen',
  'last_seen',
  'start_time',
  'stop_time',
  'published',
  'content',
];

export const ignoredAttributesInFeeds = [
  'x_opencti_stix_ids',
  'spec_version',
  'extensions',
  'importFiles',
];

export const dateAttributes = [
  'ctime',
  'mtime',
  'atime',
  'attribute_date',
  'validity_not_before',
  'validity_not_after',
  'private_key_usage_period_not_before',
  'private_key_usage_period_not_after',
  'start',
  'end',
  'created_time',
  'modified_time',
  'account_created',
  'account_expires',
  'credential_last_changed',
  'account_first_login',
  'account_last_login',
  'expiration_date',
  'publication_date',
  'first_seen',
  'last_seen',
  'published',
  'start_time',
  'stop_time',
];

export const numberAttributes = [
  'number',
  'src_port',
  'dst_port',
  'src_byte_count',
  'dst_byte_count',
  'src_packets',
  'dst_packets',
  'pid',
  'size',
  'number_of_subkeys',
  'subject_public_key_exponent',
  'cvv',
];

export const booleanAttributes = [
  'is_self_signed',
  'is_multipart',
  'is_hidden',
  'is_active',
  'is_disabled',
  'is_privileged',
  'is_service_account',
  'can_escalate_privs',
  'aslr_enabled',
  'dep_enabled',
];

export const multipleAttributes = ['x_opencti_additional_names', 'protocols', 'descriptions'];

export const markdownAttributes = ['description', 'x_opencti_description'];

export const typesWithOpenCTIAliases = [
  'Course-Of-Action',
  'Identity',
  'Individual',
  'Organization',
  'Sector',
  'Position',
  'Location',
  'City',
  'Country',
  'Region',
  'Event',
  'Channel',
  'Narrative',
];

export const typesWithoutAliases = ['Indicator', 'Vulnerability', 'Language'];