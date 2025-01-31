import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  return (
    <div className="app">
      <SushiContainer />
      <Table plates={addPlate} />
    </div>
  );
}

export default App;
