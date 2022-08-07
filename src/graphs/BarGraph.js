import React, { useState, useRef, useEffect } from "react";
import faker from "faker";
import { Bar } from "react-chartjs-2";
import autoAnimate from "@formkit/auto-animate";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
      font: { size: 18 },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      borderColor: "rgb(73, 62, 235)",
      backgroundColor: "rgba(53, 62, 235, 0.5)",
    },
  ],
};

const BarGraph = () => {
  const parentComp = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    parentComp.current && autoAnimate(parentComp.current);
  }, [parentComp]);
  const reveal = () => {
    setShow(!show);
  };
  return (
    <div className="bar_chart" ref={parentComp}>
      <strong onClick={reveal}>{`${show ? "Hide" : "Show"} Bar Graph`}</strong>
      {show && <Bar options={options} data={data} />}
    </div>
  );
};

export default BarGraph;
