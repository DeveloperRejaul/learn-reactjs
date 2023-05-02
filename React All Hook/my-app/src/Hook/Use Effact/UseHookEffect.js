import React, { useEffect, useState } from "react";

export default function UseHook() {
  const [count, setcount] = useState(0);
  const [date, setdate] = useState(new Date());
  const [text, settext] = useState();

  const addClick = () => {
    setcount((pevCount) => pevCount + 1);
  };

  useEffect(() => {
    console.log("Hello");
    document.title = `click ${count} times`;
  }, [count]);

  // useEffect(() => {
  //   setInterval(tick, 100);
  // },[]);

  // const tick = () => {
  //   setdate(new Date());
  // };

  return (
    <div>
      <p> Timer:{date.toLocaleTimeString()} </p>

      <input
        type="text"
        value={text}
        onChange={(event) => settext(event.target.value)}
      />

      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
