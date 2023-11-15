import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import { useState,useEffect } from "react";


const BASE_url = " http://localhost:3001/sushis";
function SushiContainer(props) {
  const [sushiData, setSushiData] = useState([])
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(`${BASE_url}?_limit=${limit }`)
      .then((res) => res.json())
      .then((data) => setSushiData((prevData)=>[...prevData,...data]))
      .catch((err) => console.log("err"));
  }, [limit]);

  function handleAdd() {
    //next four plates
    setLimit((prev) => prev + 4);
  }
  return (
    <div className="belt">
      {sushiData.slice(-4).map((item) => (
        <Sushi key={item.id} item={item} />
      ))}
      <MoreButton addLimit={handleAdd} />
    </div>
  );
}

export default SushiContainer;
