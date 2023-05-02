import React from "react";

//  using useRaf stap 04 [=== .ref ===]
function From({ type, placeholder }, ref) {
  return (
    <div>
      {/* using useRaf stap 05 [ref={ref}] */}
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
}

//  using useRaf stap 06 [React.forwardRef(From)]
export default React.forwardRef(From);
