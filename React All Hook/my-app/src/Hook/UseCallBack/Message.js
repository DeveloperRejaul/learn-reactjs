import React, { memo } from "react";

function Message({ onHandelIncremant }) {
  console.log("I'm Message Component");
  return (
    <div>
      <button onClick={onHandelIncremant}>Increment num </button>
    </div>
  );
}

export default memo(Message);
