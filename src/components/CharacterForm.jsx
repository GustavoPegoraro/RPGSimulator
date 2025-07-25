import { useState } from "react";
import "../App.css";

export default function CharacterForm({ onAdd }) {
  const [name, setName] = useState("");
  const [maxHp, setMaxHp] = useState(100);
  const [hp, setHp] = useState(100);
  const [mana, setMana] = useState(50);
  const [items, setItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || maxHp < 30) return alert("Preencha os campos corretamente!");
    onAdd({ name, maxHp, hp, mana, items: items.split(",") });

    setName("");
    setMaxHp(Number(100));
    setHp(Number(100));
    setMana(Number(50));
    setItems("");
  };

  return (
    <form onSubmit={handleSubmit} class="card">
      <h2>Cadastrar Personagem</h2>

      <label>Nome do Personagem</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Vida (HP)</label>
      <input
        type="number"
        value={maxHp}
        onChange={(e) =>
          setMaxHp(Number(e.target.value), setHp(Number(e.target.value)))
        }
      />

      <label>Mana</label>
      <input
        type="number"
        value={mana}
        onChange={(e) => setMana(Number(e.target.value))}
      />

      <label>Itens (separados por vírgula)</label>
      <input
        type="text"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
