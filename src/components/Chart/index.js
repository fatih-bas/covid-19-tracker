import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const labels = ["Infected", "Recovered", "Deaths", "Active"];
  const chartData = useSelector((state) => state.covid.items);
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [
          chartData.confirmed,
          chartData.recovered,
          chartData.deaths,
          chartData.active,
        ],
        backgroundColor: [
          "rgba(102,179,255,.5)",
          "rgba(191,242,202,.5)",
          "rgba(237,178,178,.5)",
          "rgba(237,199,152,.5)",
        ],
      
      },
    ],
  };
  return (
    <div className="mt-10 w-full md:w-3/4 mx-auto">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
