export const pillarsByAudit = {
  complete: ["Schema hygiene", "Identity coverage", "Tracking quality", "Session continuity", "Attribution readiness"],
  ml: ["Feature completeness", "Label quality", "Entity consistency", "Event freshness"],
  tracking: ["Event naming", "Parameter integrity", "Session stitching", "Conversion fidelity"],
};

export const statusCycle = ["Validating metadata", "Inspecting event streams", "Computing readiness score", "Packaging recommendations"];
