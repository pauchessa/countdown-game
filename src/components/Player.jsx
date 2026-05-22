import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [edited, setEdited] = useState(false);

  function handleChangeName(event) {
    setEdited(false);
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setEdited(true);
  }

  return (
    <section id="player">
      <h2>Welcome {edited ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChangeName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
