import { findingsByAudit, actionsByAudit } from "../data/findings";
import { scoreByAudit } from "../data/scores";
import { pillarsByAudit, statusCycle } from "../data/pillars";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const auditService = {
  async runAudit({ audit, onProgress }) {
    const pillars = pillarsByAudit[audit];
    for (let i = 0; i <= pillars.length; i += 1) {
      onProgress({
        step: i,
        total: pillars.length,
        status: statusCycle[i % statusCycle.length],
      });
      await wait(900);
    }
    return {
      scores: scoreByAudit[audit],
      findings: findingsByAudit[audit],
      recommendations: actionsByAudit[audit],
    };
  },
};
