import React, { useMemo } from "react";

function Massage() {
  // useing useMemo Hook
  const calculatedNum = useMemo(() => {
    let CountNum = 0;
    for (let index = 0; index < 5000000000; index++) {
      CountNum++;
    }
    return CountNum;
  }, []);

  return (
    <div>
      <p> Number : {calculatedNum}</p>
    </div>
  );
}

export default Massage;
