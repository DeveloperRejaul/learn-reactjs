import React, { useState } from "react";

import Component02 from "./Component02";
function Component01() {
  const [Chaild, setChaild] = useState(null);

  const HandelStateUp = (ChaildData) => {
    setChaild(ChaildData);
  };

  return (
    <div>
      <Component02 stateUp={HandelStateUp} />
      <h2> {Chaild}</h2>
    </div>
  );
}

export default Component01;
