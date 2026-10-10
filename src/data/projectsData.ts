import type { ProjectItem, SpecItem } from '../types';

export const UBOX_DATA = {
  name: 'U-BOX',
  headline: 'Wireless Programmable Auto-Switch',
  status: 'Working prototype' as const,
  repoUrl: 'https://github.com/WhayBot/U-BOX',
  license: 'MIT',
  dashboardUrl: 'http://192.168.4.1',
  problem: 'Equipment needs to turn on and off on a reliable schedule, but conventional smart plugs require internet access, mobile apps, and cloud accounts that fail when connectivity drops.',
  solution: 'U-BOX operates entirely offline. It creates its own local WiFi network for configuration and keeps accurate time using an onboard battery-backed hardware clock.',
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
  ] as SpecItem[],
  notes: 'The web dashboard is currently available in Indonesian. An English version is in progress.',
};

export const OTHER_PROJECTS: ProjectItem[] = [
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
];

export const FOUNDER_INFO = {
  name: 'Bangkit Bayu Alfaris',
  role: 'Founder, Robotics & Embedded Systems Engineer',
  bio: 'Builds embedded hardware and AI agents, focusing on functional prototypes that work reliably without cloud lock-in. Works with C++, Python, Next.js, and C#.',
  location: 'Kebumen, Central Java, Indonesia',
  companySummary: 'An early-stage engineering studio developing embedded devices and AI agents, starting from working prototypes.',
  links: {
    github: 'https://github.com/WhayBot',
    x: 'https://x.com/ByBayu__',
    portfolio: 'https://bangkitbayua.vercel.app',
    email: 'team@celestarc.online',
  },
};
