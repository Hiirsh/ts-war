import React, { useState } from "react";

//  (page: string, name: string): void
interface Props {
  changePage: (page: string, name: string) => void;
}
const Start = ({ changePage }: Props) => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Ready to war</h1>
      <input
        type={"text"}
        placeholder={"Enter your name"}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => changePage("Game", name)}>Start</button>
    </div>
  );
};

export default Start;
