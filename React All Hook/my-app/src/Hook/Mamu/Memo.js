/**
 * @Title : Component er Modde Take Chaild Component oprojunio render huoya teke basar junno memo bebhar kura huy
 *
 * Example : ey kane Message component ta chaild component
 * === ey kane tar state changing er kono somporko natakle se render huye jay.
 * // kinto judi amra chaild component ke memo mathod er moddo diye ref kure di , tayle ar render huy na.
 * // karon se memoraiz kure rake.
 *
 * ===  abar judi Massege component , Memo Component er State Change er sate o change kura huy, tayle Massage o render hube
 *
 * ===  Abar judi callBack kono function take , Chail teke perent er data accese er junno. tolon sodo memo bebohar kurleo hube na. kukon call back function ti useCallback Hook diye ref kure dite hube
 *
 */

import React, { useState } from "react";
import Message from "./Message.js";

export default function MemuCom() {
  const [count, setCount] = useState(0);

  // Log
  console.log("I'm MemuCom Component");

  return (
    <div>
      {/* This Component Data */}
      <h2>Count: {count}</h2>
      <button
        type={"button"}
        onClick={() => setCount((prevausState) => prevausState + 1)}
      >
        ADD
      </button>
      <Message numBerOfCount={count} />
    </div>
  );
}
