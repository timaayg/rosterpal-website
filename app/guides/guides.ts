export type Guide = { slug: string; title: string; description: string; intro: string; steps: [string,string][]; feature: string; featureName: string };
export const guides: Guide[] = [
  {
    "slug": "organise-rotating-work-roster",
    "title": "How to Organise a Rotating Work Roster",
    "description": "Practical steps to understand repeating shift cycles, roster lines and rest days, and organise a rotating work roster in a personal calendar.",
    "intro": "Rotating rosters can be difficult to follow when the same pattern repeats across several weeks. A clear cycle, the correct roster line and a reliable calendar make it easier to plan ahead.",
    "steps": [
      [
        "Find the complete cycle",
        "Check how many weeks the pattern takes to repeat. A four-week roster, for example, should be treated as a four-week cycle rather than four unrelated weekly schedules."
      ],
      [
        "Identify your roster line",
        "If the published master roster includes several employees or lines, make sure you are reading the correct one. Check the start date so the pattern aligns with the current week."
      ],
      [
        "Record the details that matter",
        "Keep start and finish times, overnight duties, split shifts, work locations and rest days visible. Small differences between similar duties can affect personal plans."
      ],
      [
        "Check the next cycle",
        "Compare upcoming dates with the employer's published roster, especially after a roster change, leave period or line reassignment."
      ],
      [
        "Bring the pattern into a calendar",
        "RosterPal Master Roster can import a PDF or image, let you select your line and review the extracted repeating shifts before saving."
      ]
    ],
    "feature": "/master-roster",
    "featureName": "Explore Master Roster"
  },
  {
    "slug": "import-pdf-work-roster-calendar",
    "title": "How to Import a PDF Work Roster into Your Calendar",
    "description": "A step-by-step guide to importing a PDF or image work roster, checking detected shifts and adding them to your personal calendar.",
    "intro": "A PDF roster is useful for publishing duties, but repeatedly opening it to find your next shift is inconvenient. Importing it into a personal shift calendar can make your schedule easier to use.",
    "steps": [
      [
        "Start with the latest roster",
        "Use the most recent roster PDF or a clear image. If your employer has issued a revised roster, check that you are not using an older version."
      ],
      [
        "Choose the right import workflow",
        "For a repeating multi-week cycle, use Master Roster. For a newly issued schedule that changes regularly, use Week-to-Week."
      ],
      [
        "Select your details",
        "Where a roster contains multiple names or lines, confirm the correct employee and roster period before accepting detected shifts."
      ],
      [
        "Review every detected shift",
        "Check dates, start and finish times, split segments, overnight duties, rest days and locations against the original. Automatic extraction can make mistakes."
      ],
      [
        "Save and verify your calendar",
        "After import, check the calendar against the source document and update it whenever the employer publishes changes."
      ]
    ],
    "feature": "/week-to-week",
    "featureName": "Explore Week-to-Week Import"
  },
  {
    "slug": "plan-annual-leave-around-shifts",
    "title": "How to Plan Annual Leave Around Shift Work",
    "description": "Learn how to compare rostered workdays, rest days and leave dates when planning time off from a rotating or changing shift schedule.",
    "intro": "For shift workers, a week away does not always mean five rostered workdays. Your actual duties, rest days and roster cycle determine how a proposed break fits around work.",
    "steps": [
      [
        "Look beyond calendar dates",
        "Identify which dates are rostered workdays and which are already rest days. Two leave periods of the same length can cover different numbers of shifts."
      ],
      [
        "Check your current roster",
        "Use the latest published schedule and consider any pending roster changes before making plans."
      ],
      [
        "Compare different leave windows",
        "Look at alternative start and end dates to see which rostered duties fall within each break and how many consecutive days away from work you may get."
      ],
      [
        "Confirm workplace rules",
        "Leave balances, approval, public holidays and deductions depend on your employer's policies and applicable employment arrangements. Check with your employer before booking travel."
      ],
      [
        "Use planning tools carefully",
        "RosterPal's Leave Planner helps you see which scheduled shifts are affected by selected dates. Treat it as a planning aid, not an employer leave approval."
      ]
    ],
    "feature": "/plans",
    "featureName": "See RosterPal Planning Features"
  },
  {
    "slug": "manage-changing-weekly-work-rosters",
    "title": "How to Manage Changing Weekly Work Rosters",
    "description": "Tips for tracking newly published weekly rosters, spotting changed shifts and keeping a personal work calendar up to date.",
    "intro": "When work publishes a different roster every week, the challenge is not just recording shifts once. It is keeping up with revised duties, changed start times and overlapping plans.",
    "steps": [
      [
        "Keep a clear source of truth",
        "Save the latest issued roster and note its dates or version. Avoid relying on an old screenshot when a new schedule has been published."
      ],
      [
        "Check for revisions",
        "Compare updated duties with your previous calendar entries. Pay attention to changes in start times, finish times, locations and rest days."
      ],
      [
        "Review split and overnight shifts",
        "A duty that crosses midnight or has multiple segments may need special attention when importing or entering it."
      ],
      [
        "Update your calendar deliberately",
        "Review changes before replacing existing shifts so you do not accidentally lose information you still need."
      ],
      [
        "Repeat a simple weekly routine",
        "When a new PDF or image is published, import it, review the detected duties and confirm the final calendar against the source. RosterPal Week-to-Week is designed for this workflow."
      ]
    ],
    "feature": "/week-to-week",
    "featureName": "Explore Week-to-Week"
  }
];
