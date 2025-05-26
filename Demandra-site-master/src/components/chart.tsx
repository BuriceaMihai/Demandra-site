import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./chart.css";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Accuracy",
        data: [93, 89, 83, 77],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: { enabled: false },
        fontFamily: "inherit",
        toolbar: { show: false },
      },
      colors: ["#7b439c"],
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      title: {
        text: "Current Model Accuracy",
        align: "left",
        style: { fontSize: "28px" },
      },
      grid: {
        row: { colors: ["#ffffff", "transparent"], opacity: 0.5 },
      },
      xaxis: {
        categories: ["First Week", "Second Week", "Third Week", "Forth Week"],
        labels: {
          style: {
            colors: "#333",
            fontSize: "16px",
            fontFamily: "Arial",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        min: 40,
        max: 100,
        tickAmount: 6,
        labels: {
          formatter: function (val: number) {
            return val + "%";
          },
          style: {
            colors: "#333",
            fontSize: "1rem",
            fontFamily: "Arial",
            fontWeight: 500,
          },
        },
        title: { text: "" },
        axisBorder: { show: true, color: "#78909C" },
        axisTicks: { show: true, color: "#78909C" },
      },
      responsive: [
        {
          breakpoint: 900,
          options: {
            chart: { height: 420, width: "170%" },
            title: { style: { fontSize: "27px" } },
            xaxis: { labels: { style: { fontSize: "20px" } } },
            yaxis: {
              min: 40,
              max: 100,
              tickAmount: 6,
              labels: { style: { fontSize: "20px" } },
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: { height: 320, width: "140%" },
            title: { style: { fontSize: "20px" } },
            xaxis: { labels: { style: { fontSize: "14px" } } },
            yaxis: {
              min: 40,
              max: 100,
              tickAmount: 6,
              labels: { style: { fontSize: "14px" } },
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart" style={{ width: "100%", maxWidth: 530, margin: "0 auto" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={500}
        width="200%"
      />
    </div>
  );
};

export default ApexChart;
