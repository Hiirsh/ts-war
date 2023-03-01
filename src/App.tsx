import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";

function App() {
  const [page, setPage] = useState("Start");
  const [name, setName] = useState("Player");
  const [compWins, setCompWins] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);

  switch (page) {
    case "Game":
      return (
        <Game
          changePage={setPage}
          setCompWins={setCompWins}
          setPlayerWins={setPlayerWins}
          name={name}
        />
      );
    case "Result":
      return (
        <Result
          changePage={setPage}
          compWins={compWins}
          playerWins={playerWins}
        />
      );
    default:
      return <Start changePage={setPage} setName={setName} />;
  }
}

export default App;
