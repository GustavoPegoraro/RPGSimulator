import { useEffect, useState } from "react";
import CharacterForm from "./components/CharacterForm.jsx";
import CharacterList from "./components/CharacterList.jsx";
import DiceRoller from "./components/DiceRoller.jsx";
import History from "./components/History.jsx";

import "./App.css";

export default function App() {
  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("characters");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const addCharacter = (char) => {
    setCharacters((prev) => [...prev, char]);
    setHistory((prev) => [...prev, `Personagem ${char.name} adicionado.`]);
  };

  const updateHistory = (action) => {
    setHistory((prev) => [...prev, action]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Simulador de RPG </h1>

      <div className="grid">
        <CharacterForm onAdd={addCharacter} />
        <CharacterList
          characters={characters}
          updateHistory={updateHistory}
          setCharacters={setCharacters}
        />
      </div>

      <div className="grid">
        <DiceRoller updateHistory={updateHistory} />
        <History history={history} />
      </div>
    </div>
  );
}
