/**
 * @Title : use Context
 *
 * Bebohr : eyti bebo har kura huy State ke Golobal kurar junno
 *
 */

import React, { useState } from "react";
import { Context } from "./Context.js";
import Massage from "./Massage.js";

// Stap 02 => Creating State
export default function UseContext() {
  const [first, setfirst] = useState(`I'm Frome Context.Provider`);

  return (
    // Stap : 03 => ref component Context.povider
    <Context.Provider value={{ first, setfirst }}>
      <Massage />
    </Context.Provider>
  );
}
