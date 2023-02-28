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

  //   const changePage = (page: string, ...args: string[] | number[]): void => {
  //     switch (args.length) {
  //       case 0:
  //         setPage(page);
  //         break;
  //       case 1:
  //         setPage(page);
  //         setName(args[0]);
  //         break;
  //       case 2:
  //         setPage(page);
  //         setCompWins(args[0]);
  //         setPlayerWins(args[1]);
  //     }
  //   };

  const changePageGame = (
    page: string,
    compWins: number,
    playerWins: number
  ): void => {
    setPage(page);
    setCompWins(compWins);
    setPlayerWins(playerWins);
  };

  const changePageResult = (page: string): void => {
    setPage(page);
  };
  
  const changePageStart = (page: string, name: string): void => {
    setPage(page);
    setName(name);
  };

  switch (page) {
    case "Game":
      return <Game changePage={changePageGame} name={name} />;
    case "Result":
      return (
        <Result
          changePage={changePageResult}
          compWins={compWins}
          playerWins={playerWins}
        />
      );
    default:
      return <Start changePage={changePageStart} />;
  }
}

export default App;
