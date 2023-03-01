import React, { useState } from "react";

interface Props {
  changePage: (page: string) => void;
  setName: (name: string) => void;
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
      <button
        onClick={() => {
          changePage("Game");
          setName(name);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
