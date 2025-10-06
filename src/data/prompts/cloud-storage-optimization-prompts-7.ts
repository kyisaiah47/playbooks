export const categoryName = "Backup and Disaster Recovery Planning";

export const prompts = [
  {
    id: 'prompt-1',
    prompt: 'Document the current backup frequency, retention policies, and recovery time objectives for each critical data tier in your cloud storage environment.',
    category: 'planning'
  },
  {
    id: 'prompt-2',
    prompt: 'Research industry best practices for implementing the 3-2-1 backup rule in multi-cloud environments and note key implementation considerations.',
    category: 'reflection'
  },
  {
    id: 'prompt-3',
    prompt: 'Reflect on past data loss incidents or near-misses in your organization and identify what backup strategies could have prevented or minimized the impact.',
    category: 'reflection'
  },
  {
    id: 'prompt-4',
    prompt: 'Investigate automated backup solutions available from your cloud provider and compare their features, costs, and integration capabilities.',
    category: 'decision'
  },
  {
    id: 'prompt-5',
    prompt: 'Document your organization\'s compliance requirements for data backup and retention, noting specific regulatory mandates that affect storage strategies.',
    category: 'planning'
  },
  {
    id: 'prompt-6',
    prompt: 'Research cross-region and cross-cloud backup strategies, noting the trade-offs between cost, performance, and resilience.',
    category: 'research'
  },
  {
    id: 'prompt-7',
    prompt: 'Reflect on how your current disaster recovery plan aligns with business priorities and identify gaps in coverage or testing procedures.',
    category: 'reflection'
  },
  {
    id: 'prompt-8',
    prompt: 'Document the recovery procedures for different types of data corruption or deletion scenarios, including step-by-step restoration processes.',
    category: 'planning'
  },
  {
    id: 'prompt-9',
    prompt: 'Research emerging trends in backup technology such as immutable backups, air-gapped storage, and ransomware protection features.',
    category: 'research'
  },
  {
    id: 'prompt-10',
    prompt: 'Reflect on the effectiveness of your backup testing schedule and document lessons learned from recent recovery drills or actual recovery events.',
    category: 'reflection'
  }
];
