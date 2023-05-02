/**
 * @Title : useMemu
 * Beboha : eyta bebohar kura hoy molotu Comolex kono calculation er kaz kurle. ba Large kono calculation er kaz kurle.
 *
 */

import React, { useState } from "react";
import Massege from "./Massege.js";

export default function UseMemu() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> Clicked: {count} </h2>
      <button type={"button"} onClick={() => setCount((c) => c + 1)}>
        Click
      </button>

      <Massege />
    </div>
  );
}
