import { useMemo } from "react";
import { useAudit } from "../context/AuditContext";

export function useAuditSummary() {
  const { scores, findings, recommendations, lastRunAt } = useAudit();
  return useMemo(
    () => ({
      score: scores?.score ?? 0,
      verdict: scores?.verdict ?? "No audit yet",
      findingsCount: findings.length,
      actionsCount: recommendations.length,
      lastRunAt,
    }),
    [scores, findings.length, recommendations.length, lastRunAt]
  );
}
