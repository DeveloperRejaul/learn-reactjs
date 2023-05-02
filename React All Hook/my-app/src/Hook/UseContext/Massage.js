import React, { useContext } from "react";
import { Context } from "./Context.js";

export default function Massage() {
  // Stap 04
  const { first, setfirst } = useContext(Context);

  return (
    <div>
      <h1>{first}</h1>
      <button type="button" onClick={() => setfirst("Set Data From Chaild")}>
        Click
      </button>
    </div>
  );
}
