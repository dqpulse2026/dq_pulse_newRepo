import "./ScoreTable.css";

function ScoreTable({ rows = [] }) {
  return (
    <details className="score-table">
      <summary>Open detailed pillar scores</summary>
      <table>
        <thead>
          <tr>
            <th>Pillar</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.pillar}>
              <td>{row.pillar}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}

export default ScoreTable;
