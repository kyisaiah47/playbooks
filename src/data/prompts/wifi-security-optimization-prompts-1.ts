export const categoryName = "Network Assessment & Vulnerability Analysis";

export const prompts = [
  {
    id: 'prompt-1',
    prompt: 'Document the specific WiFi security protocols (WEP, WPA, WPA2, WPA3) currently in use across your network infrastructure and note any legacy systems still requiring older standards.',
    category: 'planning'
  },
  {
    id: 'prompt-2',
    prompt: 'Research the latest WiFi security vulnerabilities discovered in the past 12 months and compile a list of which ones affect your current network equipment.',
    category: 'research'
  },
  {
    id: 'prompt-3',
    prompt: 'Record the physical locations where your WiFi signals can be detected from outside your intended coverage area and assess potential eavesdropping risks.',
    category: 'planning'
  },
  {
    id: 'prompt-4',
    prompt: 'Investigate which devices on your network are using default or weak authentication credentials and catalog their security exposure levels.',
    category: 'planning'
  },
  {
    id: 'prompt-5',
    prompt: 'Reflect on past security incidents in your organization and identify which WiFi-related weaknesses contributed to successful attacks or data breaches.',
    category: 'reflection'
  },
  {
    id: 'prompt-6',
    prompt: 'Document all third-party devices (IoT sensors, guest access points, contractor equipment) that connect to your WiFi and evaluate their individual security postures.',
    category: 'decision'
  },
  {
    id: 'prompt-7',
    prompt: 'Research industry-specific WiFi security compliance requirements that apply to your organization and note any gaps in your current implementation.',
    category: 'research'
  },
  {
    id: 'prompt-8',
    prompt: 'Analyze your current WiFi network segmentation strategy and document which user groups and device types have access to which network resources.',
    category: 'reflection'
  },
  {
    id: 'prompt-9',
    prompt: 'Reflect on the balance between WiFi security measures and user convenience in your environment, noting areas where security policies may be circumvented due to usability issues.',
    category: 'reflection'
  },
  {
    id: 'prompt-10',
    prompt: 'Investigate emerging WiFi security threats specific to your industry vertical and document how prepared your current defenses are against these evolving attack vectors.',
    category: 'planning'
  }
];
