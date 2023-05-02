import React, { useState, useRef, useEffect } from "react";
import From from "./From.js";



/*** 
  note:
  @ kono Component e judi useRef bebohar kurte huy tayle 
  @ tayle child component tike "React.forwardRef" diye raf kure dite hube 
  @ and Chald componete akti props nite hube 
  @ ja Parent Component teke "ref={InputRef}" ti props akare jabe
  @@ mune rakte hube eykane Stap 6 ti
***/ 




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
      <From
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
