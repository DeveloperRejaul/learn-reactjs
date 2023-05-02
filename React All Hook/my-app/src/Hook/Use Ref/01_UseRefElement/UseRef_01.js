import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [text, setText] = useState(null);

  // using useRaf stap 01
  const InputRef = useRef(null);

  // using useRaf stap 03
  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        // using useRaf stap 02
        ref={InputRef}
        type="text"
        placeholder="Something write here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
