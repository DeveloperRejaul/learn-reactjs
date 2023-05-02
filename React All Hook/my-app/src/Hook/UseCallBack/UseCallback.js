/**
 * @Title : UseCallback
 *
 * Roles : UseCallback bebohar kura huy moloto callback function e.
 *         1. callback function bebohar kura huy moloto chail component teke perent componetn er data niye asar junno
 *
 *         2. eykane useCallback bebphar kura huy karon chaild Component ate props akare patano CallBack fanction ti, oprojunio call na huoyar junno.
 *         3. useCallback bebohar kurle ayti tokony call hube jukon oy function er sate somporkitu state change hube
 */

import React, { useCallback, useState } from "react";
import Message from "./Message.js";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // CallBackFunction
  // Useing useCallback()
  const onHandelIncremant = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  // Log
  console.log("I'm UseCallback Component");

  return (
    <div>
      {toggle ? "ON" : "OFF"}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h2>Count: {count}</h2>
      <button
        type={"button"}
        onClick={() => setCount((prevausState) => prevausState + 1)}
      >
        ADD
      </button>
      <Message numBerOfCount={0} onHandelIncremant={onHandelIncremant} />
    </div>
  );
}

export default UseCallback;
