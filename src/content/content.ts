// Centralized content dictionary for clean, honest copywriting.

export interface OtherProjectItem {
  name: string;
  description: string;
  status: string;
  repoUrl?: string;
}

export interface TeamMember {
  role: string;
  name: string;
  bio: string;
  photoUrl: string;
  photoPlaceholder: string;
  links?: {
    portfolio?: string;
    github?: string;
    x?: string;
  };
}

export interface ContentDictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    location: string;
  };
  navbar: {
    links: {
      ubox: string;
      projects: string;
      about: string;
      contact: string;
    };
    githubButton: string;
  };
  hero: {
    studioTitle: string;
    studioDescription: string;
    imageUrl: string;
    imageAlt: string;
    images?: string[];
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  ubox: {
    title: string;
    intro: string;
    problemTitle: string;
    problemText: string;
    solutionTitle: string;
    solutionText: string;
    diagramImage: string;
    diagramAlt: string;
    stepsHeader: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    specsTitle: string;
    specsLinkText: string;
    specs: Array<{
      parameter: string;
      value: string;
    }>;
    notes: string;
  };
  otherProjects: {
    title: string;
    intro: string;
    projects: OtherProjectItem[];
  };
  about: {
    title: string;
    headline: string;
    githubUrl: string;
    githubLinkText: string;
    teamTitle: string;
    team: TeamMember[];
  };
  contact: {
    title: string;
    intro: string;
    emailTitle: string;
    emailText: string;
    emailButton: string;
    githubTitle: string;
    githubText: string;
    githubLinkText: string;
  };
  footer: {
    copyright: string;
    email: string;
    githubUrl: string;
  };
}

export const contentEN: ContentDictionary = {
  meta: {
    siteTitle: 'Celestarc Industries | Embedded Devices & AI Agents',
    siteDescription: 'Independent engineering studio based in Kebumen, Central Java, Indonesia. Building embedded devices and AI agents, starting from working prototypes.',
    location: 'Kebumen, Central Java, Indonesia',
  },
  navbar: {
    links: {
      ubox: 'U-BOX',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    githubButton: 'View on GitHub',
  },
  hero: {
    studioTitle: 'Celestarc Industries',
    studioDescription: 'An independent engineering studio based in Kebumen, Central Java, Indonesia. We build embedded devices and AI agents, starting from working prototypes.',
    imageUrl: '/image/hero.png',
    imageAlt: 'Celestarc Industries studio and hardware engineering',
    images: [
      '/image/hero.png',
      '/image/hero1.png',
      '/image/hero2.png',
      '/image/hero3.png',
    ],
    title: 'A WiFi switch that runs on schedule, even without internet.',
    subtitle: 'U-BOX turns equipment on and off at set times. It keeps accurate time with a hardware clock and needs no internet or cloud account.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Get in touch',
  },
  ubox: {
    title: 'U-BOX: Wireless Programmable Auto-Switch',
    intro: 'An open-source timer switch built on the ESP8266 platform that automates appliances on schedule without relying on cloud services or home internet.',
    problemTitle: 'The Problem',
    problemText: 'Equipment needs to turn on and off on a reliable schedule, but conventional smart plugs require internet access, mobile apps, and cloud accounts that fail when connectivity drops.',
    solutionTitle: 'The Solution',
    solutionText: 'U-BOX operates entirely offline. It creates its own local WiFi network for configuration and keeps accurate time using an onboard battery-backed hardware clock.',
    diagramImage: '/image/ubox-diagram.png',
    diagramAlt: 'U-BOX signal and power routing diagram',
    stepsHeader: 'How It Works',
    steps: [
      {
        step: '1',
        title: 'Connect to U-BOX WiFi',
        description: 'Join the device WiFi access point from any phone or computer. The captive portal opens the local dashboard automatically in your browser.',
      },
      {
        step: '2',
        title: 'Set Schedules & Timers',
        description: 'Configure daily repeating ON/OFF schedules, set a one-shot countdown timer, or toggle the relay manually directly from the web interface.',
      },
      {
        step: '3',
        title: 'Runs Independently',
        description: 'The onboard hardware clock maintains time accuracy even during power outages. The relay switches connected equipment on time without internet.',
      },
    ],
    specsTitle: 'Hardware & Firmware Specifications',
    specsLinkText: 'View Source on GitHub',
    specs: [
      { parameter: 'Microcontroller', value: 'ESP8266 (WeMos D1 Mini)' },
      { parameter: 'Real-Time Clock', value: 'DS1307 hardware RTC with CR2032 battery backup' },
      { parameter: 'Switching Relay', value: '1-Channel optocoupler module, 5V trigger, configurable active level (Low/High)' },
      { parameter: 'Power Input', value: '5V DC (minimum 1A recommended)' },
      { parameter: 'Network Mode', value: 'Standalone WiFi Access Point with captive portal' },
      { parameter: 'Local Dashboard URL', value: 'http://192.168.4.1' },
      { parameter: 'Firmware Updates', value: 'Wireless Over-The-Air (OTA) via ElegantOTA v3' },
      { parameter: 'Preventative Maintenance', value: 'Configurable automatic reboot (default: every 3 days at 12:00)' },
      { parameter: 'Diagnostics', value: 'WebSocket live debug console in browser' },
      { parameter: 'Firmware Stack', value: 'C++ with PlatformIO' },
      { parameter: 'License', value: 'Open source (MIT)' },
    ],
    notes: 'The web dashboard is currently available in Indonesian. An English version is in progress.',
  },
  otherProjects: {
    title: 'Other Projects',
    intro: 'Explorations across embedded systems, spatial interaction hardware, and autonomous AI agents.',
    projects: [
      {
        name: 'Dotend Air Mouse',
        description: 'Wearable 6-DoF spatial mouse for hands-free computer interaction.',
        status: 'Working prototype',
      },
      {
        name: 'Furi',
        description: 'Minecraft AI agent trained to imitate human player behavior from recorded gameplay.',
        status: 'In development',
        repoUrl: 'https://github.com/WhayBot/Furi',
      },
      {
        name: 'DC-AI',
        description: 'Conversational agent featuring mood and emotional state tracking.',
        status: 'In development',
      },
      {
        name: 'Piezoelectric Smart Tiles',
        description: 'Flooring tiles designed to harvest electrical energy from pedestrian footsteps. Unfunded concept.',
        status: 'Concept',
      },
      {
        name: 'DUSK',
        description: 'Autonomous robot vacuum built on Raspberry Pi Zero 2W.',
        status: 'Working prototype',
        repoUrl: 'https://github.com/WhayBot/DUSK-v1.2',
      },
      {
        name: 'Mist-Ify',
        description: 'Automated oyster mushroom cultivation controller regulating humidity and temperature.',
        status: 'Working prototype',
        repoUrl: 'https://github.com/WhayBot/Mist-Ify',
      },
    ],
  },
  about: {
    title: 'Engineering you can inspect.',
    headline: 'Celestarc Industries is an engineering studio for embedded hardware and AI agents. We build prototypes first and publish the code as we go.',
    githubUrl: 'https://github.com/WhayBot',
    githubLinkText: 'See our source code on GitHub →',
    teamTitle: 'Meet The Team',
    team: [
      {
        role: 'Founder, Robotics & Embedded Systems Engineer',
        name: 'Bangkit Bayu Alfaris',
        bio: 'Builds embedded hardware and AI agents, focusing on functional prototypes that work reliably without cloud lock-in. Works with C++, Python, Next.js, and C#.',
        photoUrl: '/image/founder.png',
        photoPlaceholder: '[FOTO FOUNDER]',
        links: {
          portfolio: 'https://bangkitbayua.vercel.app',
          github: 'https://github.com/WhayBot',
          x: 'https://x.com/ByBayu__',
        },
      },
      {
        role: 'Chief Technical Officer',
        name: 'Rhameyza Faiqo Susanto',
        bio: 'Directs software architecture, automated pipelines, and developer tooling across studio systems. Works with TypeScript, JavaScript, Java, and DevTools protocol.',
        photoUrl: '/image/cto.png',
        photoPlaceholder: '[FOTO CTO]',
        links: {
          github: 'https://github.com/rhavans',
        },
      },
      {
        role: 'Chief Operating Officer',
        name: 'Fauzan Tungga Fitra',
        bio: 'Manages prototype field testing, assembly workflows, and component sourcing across studio hardware builds. Coordinates operational schedules, deployment logistics, and project delivery.',
        photoUrl: '/image/coo.png',
        photoPlaceholder: '[FOTO COO]',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    intro: 'If you are interested in testing a hardware prototype, discussing an open-source project, or reaching out directly, send an email.',
    emailTitle: 'Direct Email',
    emailText: 'Send an email to contact us directly:',
    emailButton: 'Email us',
    githubTitle: 'Open Source Repositories',
    githubText: 'Track active hardware firmware and source code on GitHub:',
    githubLinkText: 'Browse @WhayBot on GitHub',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Celestarc Industries • Kebumen, Central Java, Indonesia`,
    email: 'team@celestarc.online',
    githubUrl: 'https://github.com/WhayBot',
  },
};

export const content = contentEN;
