import React, { memo } from "react";

function Message({ numBerOfCount }) {
  console.log("I'm Message Component");
  return <div>send {numBerOfCount} Message</div>;
}

export default memo(Message);
