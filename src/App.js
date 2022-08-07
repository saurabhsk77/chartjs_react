import React from "react";
import "./App.css";
import BarGraph from "./graphs/BarGraph";
import DoughNut from "./graphs/DoughNut";
import LineGraph from "./graphs/LineGraph";
// import Dropdown from "./components/DropDown";

export function App() {
  return (
    <>
      <div className="header">
        <span>Graph Visualization in REACT</span>
      </div>
      <div className="charts">
        <LineGraph />
        <BarGraph />
        <DoughNut />
        {/* <Dropdown /> */}
      </div>
    </>
  );
}
