import React, { useRef } from "react";
import faker from "faker";
import { Doughnut } from "react-chartjs-2";
import autoAnimate from "@formkit/auto-animate";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const Doughnut_Data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
    },
  ],
};

const DoughNut = () => {
  const parent = useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);
  return (
    <div className="line_chart" ref={parent}>
      <strong onClick={reveal}>{`${
        show ? "Hide" : "Show"
      } Doughnut Graph`}</strong>
      {show && <Doughnut options={options} data={Doughnut_Data} />}
    </div>
  );
};

export default DoughNut;
