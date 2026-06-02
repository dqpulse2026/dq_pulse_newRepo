export const findingsByAudit = {
  complete: [
    { severity: "amber", text: "Some sales events are missing currency, which can misreport revenue totals." },
    { severity: "red", text: "Many logged-in sessions do not carry user ID, so customer journeys look broken." },
    { severity: "blue", text: "Web and app attribution fields use different names, making channel reports inconsistent." },
  ],
  ml: [
    { severity: "red", text: "Customer IDs are generated differently across CRM, web, and app — causing entity duplication in training sets." },
    { severity: "amber", text: "Conversion labels arrive 24–48 hours late, delaying model feedback loops and reducing prediction accuracy." },
    { severity: "amber", text: "Weekend data imports frequently leave key feature columns empty, creating bias in weekend predictions." },
    { severity: "blue", text: "Feature distributions shift significantly between weekdays and weekends without normalization." },
  ],
  tracking: [
    { severity: "green", text: "Core event names follow a consistent snake_case convention — strong foundation for governance." },
    { severity: "amber", text: "Several custom dimensions contain 500+ unique values, creating high-cardinality noise in reports." },
    { severity: "blue", text: "Some legacy event names (v1 format) still fire alongside new names — creating duplicate counts." },
    { severity: "green", text: "Session and pageview setup is complete, with correct timeout and engagement settings." },
  ],
};

export const actionsByAudit = {
  complete: [
    {
      title: "Standardize currency on all revenue events",
      description: "Add a default currency mapping table so that every purchase, refund, and subscription event carries a consistent ISO 4217 currency code. This prevents revenue miscalculations when aggregating across regions.",
      impact: "Eliminates up to 15% revenue reporting variance across multi-currency markets",
      priority: "high",
    },
    {
      title: "Enforce user ID on authenticated sessions",
      description: "Update your tag management setup to ensure that every logged-in session includes the same canonical user_id field. This unifies customer journeys across devices and sessions.",
      impact: "Restores full cross-device journey visibility for 40%+ of your user base",
      priority: "high",
    },
    {
      title: "Unify attribution column naming",
      description: "Create a shared naming standard for source, medium, and campaign columns across web and app data exports. Map existing variant names to the canonical schema.",
      impact: "Makes channel performance reports accurate and consistent across platforms",
      priority: "medium",
    },
  ],
  ml: [
    {
      title: "Implement a universal entity resolution layer",
      description: "Use one shared customer ID across your website, app, and CRM so the same person is not counted multiple times.",
      impact: "Gives you cleaner customer counts and more reliable customer reports",
      priority: "high",
    },
    {
      title: "Set up real-time label freshness monitoring",
      description: "Set alerts when conversion data is delayed, so your team can fix it quickly before reports become outdated.",
      impact: "Keeps dashboards current and helps teams make decisions faster",
      priority: "high",
    },
    {
      title: "Backfill and validate weekend feature data",
      description: "Add a weekend data check to make sure key fields are filled and accurate before Monday reporting.",
      impact: "Prevents misleading weekend trends and unexpected reporting gaps",
      priority: "medium",
    },
    {
      title: "Normalize feature distributions across time periods",
      description: "Review weekday vs weekend patterns and adjust your reporting rules so the same metric means the same thing every day.",
      impact: "Makes comparisons more stable across days and weeks",
      priority: "low",
    },
  ],
  tracking: [
    {
      title: "Set cardinality limits on high-variance dimensions",
      description: "Configure your analytics tool to group values exceeding a threshold (e.g., 100 unique values) into an 'other' bucket. This keeps reports clean and query performance fast.",
      impact: "Reduces report load times by up to 40% and eliminates noisy long-tail segments",
      priority: "high",
    },
    {
      title: "Sunset legacy v1 event names with a migration plan",
      description: "Create a versioned event naming guide. Set up dual-fire detection alerts, then gradually deprecate old event names over a 30-day window with team communication.",
      impact: "Eliminates double-counting and reduces event volume by ~15%",
      priority: "medium",
    },
    {
      title: "Create a weekly quality snapshot dashboard",
      description: "Build an automated weekly report that checks conversion event consistency, parameter fill rates, and session stitching accuracy. Flag any metric that drops below baseline.",
      impact: "Catches tracking regressions within 7 days instead of discovering them months later",
      priority: "medium",
    },
  ],
};
