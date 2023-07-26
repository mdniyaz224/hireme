import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DonutsCharts = () => {
  const [series] = useState([44, 55, 41, 17, 15]);
  const [options] = useState({
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        style={{ width: "500px" }}
      />
    </div>
  );
};

export default DonutsCharts;
