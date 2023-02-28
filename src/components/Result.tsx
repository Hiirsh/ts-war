import React from "react";

interface Props {
  changePage: (page: string) => void;
  compWins: number;
  playerWins: number;
}

const Result = ({changePage, compWins, playerWins}: Props) => {
  const getResult = () => {
    if (playerWins > compWins) return "WIN";
    if (playerWins < compWins) return "LOSE";
    return "DRAW";
  };

  return (
    <div>
      <h1>{getResult()}</h1>
      <h2>
        {playerWins}-{compWins}
      </h2>
      <button onClick={() => changePage("Game")}>Again?</button>
    </div>
  );
};

export default Result;
