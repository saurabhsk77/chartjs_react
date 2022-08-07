import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import faker from "faker";
import autoAnimate from "@formkit/auto-animate";

export const options = {
  responsive: true,
  scales: { y: { ticks: { font: { size: 16 }, color: "red" } } },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
      font: {
        size: 18,
      },
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
      fill: true,
      borderWidth: 5,
    },
  ],
};

const LineGraph = () => {
  const parent = useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);
  return (
    <div className="line_chart" ref={parent}>
      <strong onClick={reveal}>{`${show ? "Hide" : "Show"} Line Graph`}</strong>
      {show && <Line options={options} data={data} />}
    </div>
  );
};

export default LineGraph;
