export const findingsByAudit = {
  complete: [
    { severity: "amber", text: "Some sales events are missing currency, which can misreport revenue totals." },
    { severity: "red", text: "Many logged-in sessions do not carry user ID, so customer journeys look broken." },
    { severity: "blue", text: "Web and app attribution fields use different names, making channel reports inconsistent." },
  ],
  ml: [
    { severity: "amber", text: "Important conversion labels arrive late, so model feedback is delayed." },
    { severity: "red", text: "Customer IDs are not created consistently across sources." },
    { severity: "blue", text: "Some key features are often empty during weekend imports." },
  ],
  tracking: [
    { severity: "blue", text: "Most high-value event names are consistent, which is a strong foundation." },
    { severity: "amber", text: "A few dimensions have too many unique values, making analysis noisy." },
    { severity: "green", text: "Session and pageview setup is complete and reliable." },
  ],
};

export const actionsByAudit = {
  complete: [
    "Add a default currency mapping so revenue is always comparable.",
    "Ensure logged-in events always include the same user ID field.",
    "Use one shared naming standard for attribution columns across all sources.",
  ],
  ml: [
    "Set freshness checks so new data arrives on time every day.",
    "Use one agreed method for generating customer IDs.",
    "Track empty values for critical model input fields and alert early.",
  ],
  tracking: [
    "Add limits for high-cardinality dimensions to keep reports clean.",
    "Version your event naming guide and retire old names gradually.",
    "Create a weekly quality snapshot for conversion event consistency.",
  ],
};
