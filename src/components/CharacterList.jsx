import "../App.css";

export default function CharacterList({
  characters,
  setCharacters,
  updateHistory,
}) {
  const applyDamage = (index, dmg) => {
    const newChars = [...characters];
    if (newChars[index].hp - dmg <= 0) {
      dmg = newChars[index].hp;
    }
    newChars[index].hp -= dmg;
    setCharacters(newChars);
    updateHistory(`${newChars[index].name} sofreu ${dmg} de dano!`);
  };

  const healDamage = (index, heal) => {
    const newChars = [...characters];
    heal = Number(heal);
    if (newChars[index].hp + heal >= newChars[index].maxHp) {
      heal = newChars[index].maxHp - newChars[index].hp;
    }
    newChars[index].hp += heal;
    setCharacters(newChars);
    updateHistory(`${newChars[index].name} recebeu ${heal} de cura!`);
  };

  const removeCharacter = (index) => {
    const char = characters[index].name;
    const newChars = characters.filter((_, i) => i !== index);
    setCharacters(newChars);
    updateHistory(`Personagem ${char} foi removido!`);
  };

  return (
    <div className="card">
      <h2>Personagens</h2>
      {characters.length === 0 ? (
        <p>Nenhum personagem cadastrado.</p>
      ) : (
        characters.map((c, i) => (
          <div key={i} className="character-item">
            <p>
              <strong>{c.name}</strong> - ❤️ {c.hp} | 💧 {c.mana}
            </p>
            <p>Itens: {c.items.join(", ")}</p>

            <div className="buttons">
              <button onClick={() => applyDamage(i, 10)} className="btn-red">
                -10 de HP
              </button>
              <button onClick={() => healDamage(i, 10)} className="btn-red">
                +10 de HP
              </button>
              <button onClick={() => removeCharacter(i)} className="btn-gray">
                Remover
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
