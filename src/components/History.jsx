import "../App.css";

export default function History({ history }) {
  return (
    <div className="card history">
      <h2>Histórico</h2>
      {history.length === 0 ? (
        <p>Nenhuma ação registrada.</p>
      ) : (
        <ul>
          {history.map((h, i) => (
            <li key={i}> - {h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
