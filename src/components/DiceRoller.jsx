import "../App.css";

export default function DiceRoller({ updateHistory }) {
  const rollDice = (sides) => {
    const result = Math.floor(Math.random() * sides) + 1;
    updateHistory(`Você rolou um D${sides}: ${result}`);
  };

  return (
    <div className="card">
      <h2>Gerador de Dados</h2>
      <button onClick={() => rollDice(6)} className="btn-green">
        Rolar D6
      </button>
      <button onClick={() => rollDice(20)} className="btn-green">
        Rolar D20
      </button>
    </div>
  );
}
