import React, { useState, useEffect } from "react";

function useCustomHook(url) {
  const [Data, setData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [erorr, setErorr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Faching is note succesful");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoding(false);
        setErorr(null);
      })
      .catch((error) => {
        setErorr(error.message);
        setLoding(false);
      });
  }, [url]);

  return { Data, loding, erorr };
}

export default useCustomHook;
