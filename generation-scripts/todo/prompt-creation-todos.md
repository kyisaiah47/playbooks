# Prompt Creation TODOs

## 37 templates need prompt generation (37/190 = 19.5% incomplete)

### Missing Prompt Files (24 templates)
These templates have NO prompt files at all:

1. career-plateau
2. college-to-career-transition
3. death-of-spouse
4. divorce-process
5. financial-recovery
6. first-job-transition
7. first-management-role
8. fixed-income-management
9. health-crisis-management
10. health-decline-navigation
11. identity-theft-recovery
12. identity-theft
13. insurance-optimization
14. investment-property
15. job-loss-navigation
16. job-loss-recovery
17. legal-issue-management
18. marriage-maintenance
19. midlife-crisis
20. midlife-health-changes
21. peak-earning-optimization
22. rental-management
23. sandwich-generation
24. transportation-planning

### Low Prompt Count (13 templates)
These templates have prompts but need more to reach 50:

1. book-writing (4 prompts) - needs 46 more
2. budget-planning (4 prompts) - needs 46 more
3. business-launch (5 prompts) - needs 45 more
4. business-succession (4 prompts) - needs 46 more
5. camping-trips (10 prompts) - needs 40 more
6. car-buying (4 prompts) - needs 46 more
7. career-change (4 prompts) - needs 46 more
8. chronic-illness (4 prompts) - needs 46 more
9. climate-action (4 prompts) - needs 46 more
10. fitness-journey (5 prompts) - needs 45 more
11. home-buying (3 prompts) - needs 47 more
12. test-template (2 prompts) - needs 48 more
13. wedding-planning (3 prompts) - needs 47 more

## Action Required

Run prompt generation cycle for all 37 templates using:
```bash
./prompt-generation-cycle.sh [TEMPLATE_NAME]
```

Priority order:
1. Core templates (home-buying, wedding-planning, budget-planning, career-change)
2. Missing files (24 templates with no prompts)
3. Low count templates (remaining 9 templates)

## Commands to run:

```bash
# High priority core templates
./prompt-generation-cycle.sh home-buying
./prompt-generation-cycle.sh wedding-planning
./prompt-generation-cycle.sh budget-planning
./prompt-generation-cycle.sh career-change

# Missing files
./prompt-generation-cycle.sh career-plateau
./prompt-generation-cycle.sh college-to-career-transition
./prompt-generation-cycle.sh death-of-spouse
# ... (continue for all 24)

# Low count templates
./prompt-generation-cycle.sh book-writing
./prompt-generation-cycle.sh business-launch
./prompt-generation-cycle.sh business-succession
# ... (continue for remaining)
```