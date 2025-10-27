import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// All 430 transformations from the MD file
const allTransformations = [
  // Career/Work - Workplace Challenges (28)
  { old: 'zookeeper-career-development', new: 'toxic-boss-navigation', category: 'career-work' },
  { old: 'carpet-installer-career', new: 'office-politics-navigation', category: 'career-work' },
  { old: 'casino-dealer-career', new: 'being-laid-off', category: 'career-work' },
  { old: 'cement-mason-career', new: 'workplace-bullying-response', category: 'career-work' },
  { old: 'tile-installer-career', new: 'firing-someone', category: 'career-work' },
  { old: 'tile-setter-career', new: 'managing-difficult-employees', category: 'career-work' },
  { old: 'piano-tuner-career', new: 'asking-for-raise', category: 'career-work' },
  { old: 'postmaster-career-development', new: 'performance-improvement-plan-response', category: 'career-work' },
  { old: 'pest-control-career', new: 'being-passed-over-promotion', category: 'career-work' },
  { old: 'pest-control-worker', new: 'workplace-romance-navigation', category: 'career-work' },
  { old: 'locksmith-career-development', new: 'reporting-workplace-misconduct', category: 'career-work' },
  { old: 'groundskeeper-career', new: 'being-only-minority-in-office', category: 'career-work' },
  { old: 'glazier-career-development', new: 'age-discrimination-response', category: 'career-work' },
  { old: 'flooring-installer-career', new: 'returning-after-parental-leave', category: 'career-work' },
  { old: 'florist-career-development', new: 'working-with-former-peers-after-promotion', category: 'career-work' },
  { old: 'drywall-installer-career', new: 'inheriting-dysfunctional-team', category: 'career-work' },
  { old: 'referee-career-development', new: 'workplace-affair-aftermath', category: 'career-work' },
  { old: 'radio-dj-career', new: 'boss-has-favorites', category: 'career-work' },
  { old: 'tour-guide-career', new: 'coworker-sabotage', category: 'career-work' },
  { old: 'traffic-controller-career', new: 'taking-credit-for-others-work', category: 'career-work' },
  { old: 'train-conductor-career', new: 'being-scapegoated-at-work', category: 'career-work' },
  { old: 'truck-driver-career', new: 'micromanaging-boss', category: 'career-work' },
  { old: 'undertaker-career-development', new: 'absentee-boss', category: 'career-work' },
  { old: 'wine-sommelier-career', new: 'overqualified-for-job', category: 'career-work' },
  { old: 'x-ray-technician-career', new: 'underqualified-for-job', category: 'career-work' },
  { old: 'sheet-metal-worker', new: 'workplace-power-dynamics', category: 'career-work' },
  { old: 'ironworker-career-development', new: 'toxic-workplace-culture', category: 'career-work' },
  { old: 'hazardous-materials-handler', new: 'navigating-layoffs', category: 'career-work' },

  // Career Transitions (16)
  { old: 'archaeologist-career-development', new: 'industry-pivot-strategy', category: 'career-work' },
  { old: 'archivist-career-development', new: 'skill-retraining-after-automation', category: 'career-work' },
  { old: 'cartographer-career-development', new: 'freelance-to-fulltime-transition', category: 'career-work' },
  { old: 'chimney-sweep-career', new: 'fulltime-to-freelance-transition', category: 'career-work' },
  { old: 'claims-adjuster-career', new: 'corporate-to-startup-transition', category: 'career-work' },
  { old: 'court-reporter-career', new: 'startup-to-corporate-transition', category: 'career-work' },
  { old: 'detective-career-development', new: 'forprofit-to-nonprofit-transition', category: 'career-work' },
  { old: 'dispatcher-career-development', new: 'career-downshift', category: 'career-work' },
  { old: 'funeral-director-career', new: 'semi-retirement-planning', category: 'career-work' },
  { old: 'genetic-counselor-career', new: 'phased-retirement', category: 'career-work' },
  { old: 'geologist-career-development', new: 'ai-replacing-your-job', category: 'career-work' },
  { old: 'historian-career-development', new: 'automation-anxiety', category: 'career-work' },
  { old: 'immigration-officer-career', new: 'career-obsolescence-planning', category: 'career-work' },
  { old: 'lab-technician-career', new: 'pivot-from-dying-industry', category: 'career-work' },
  { old: 'legislative-aide-career', new: 'retraining-at-50-plus', category: 'career-work' },
  { old: 'marine-biologist-career', new: 'second-act-career', category: 'career-work' },

  // Modern Work (14)
  { old: 'meteorologist-career-development', new: 'hybrid-work-optimization', category: 'career-work' },
  { old: 'mining-engineer-career', new: 'four-day-work-week-transition', category: 'career-work' },
  { old: 'nuclear-technician-career', new: 'career-break-explanation', category: 'career-work' },
  { old: 'occupational-health-specialist', new: 'linkedin-profile-optimization', category: 'career-work' },
  { old: 'park-ranger-career', new: 'portfolio-career-management', category: 'career-work' },
  { old: 'petroleum-engineer-career', new: 'zoom-fatigue-management', category: 'career-work' },
  { old: 'probation-officer-career', new: 'return-to-office-after-remote', category: 'career-work' },
  { old: 'purchasing-agent-career', new: 'digital-nomad-lifestyle', category: 'career-work' },
  { old: 'quality-assurance-analyst', new: 'working-while-traveling', category: 'career-work' },
  { old: 'recreational-therapist-career', new: 'async-communication-mastery', category: 'career-work' },
  { old: 'rehabilitation-counselor-career', new: 'remote-team-building', category: 'career-work' },
  { old: 'respiratory-therapist-career', new: 'virtual-presentation-skills', category: 'career-work' },
  { old: 'risk-manager-career', new: 'distributed-team-leadership', category: 'career-work' },
  { old: 'ship-captain-career', new: 'timezone-management', category: 'career-work' },

  // Unconventional Income (14)
  { old: 'actor-career-development', new: 'onlyfans-career-planning', category: 'career-work' },
  { old: 'animator-career-development', new: 'adult-content-creation', category: 'career-work' },
  { old: 'comedian-career-development', new: 'camming-career', category: 'career-work' },
  { old: 'choreographer-career-development', new: 'sugar-baby-daddy-income', category: 'career-work' },
  { old: 'curator-career-development', new: 'escorting-career-entry', category: 'career-work' },
  { old: 'film-director-career', new: 'escorting-career-exit', category: 'career-work' },
  { old: 'filmmaker-career-development', new: 'sex-work-safety', category: 'career-work' },
  { old: 'illustrator-career-planning', new: 'sex-work-to-traditional-career', category: 'career-work' },
  { old: 'jewelry-designer-career', new: 'traditional-career-to-sex-work', category: 'career-work' },
  { old: 'makeup-artist-career', new: 'legitimizing-underground-income', category: 'career-work' },
  { old: 'music-therapist-career', new: 'cash-business-taxes', category: 'career-work' },
  { old: 'photographer-career-building', new: 'under-table-work-risks', category: 'career-work' },
  { old: 'voice-actor-career', new: 'stripping-career-planning', category: 'career-work' },
  { old: 'voice-acting-progression', new: 'exotic-dancing-exit-strategy', category: 'career-work' },
];

async function checkTransformationStatus() {
  const newGuideIds = allTransformations.map(t => t.new);

  const { data: existingGuides, error } = await supabase
    .from('guides')
    .select('id')
    .in('id', newGuideIds);

  if (error) {
    console.error('Error:', error);
    return;
  }

  const existingIds = new Set(existingGuides?.map(g => g.id) || []);
  const missing = allTransformations.filter(t => !existingIds.has(t.new));

  console.log(`\nTotal transformations: ${allTransformations.length}`);
  console.log(`Successfully transformed: ${allTransformations.length - missing.length}`);
  console.log(`Missing (accidentally deleted): ${missing.length}\n`);

  if (missing.length > 0) {
    console.log('Missing guides:');
    missing.forEach(m => {
      console.log(`- ${m.new} (was: ${m.old})`);
    });
  }
}

checkTransformationStatus();
