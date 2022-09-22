import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // useEffect(async () => {
  //   const { data } = await axios.get(`http://localhost:37777/`);
  //   console.log(data);
  //   setData(data);
  // }, []);

  return (
    <>
      <p>hello</p>
    </>
  );
}

export default App;
