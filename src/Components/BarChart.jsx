import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const createChart = () => {
      const canvas = chartRef.current;

      if (canvas) {
        if (chartInstance) {
          chartInstance.destroy();
        }

        const newChartInstance = new Chart(canvas, {
          type: "bar",
          data: chartData,
          options: {
            scales: {
              x: {
                type: "category",
                ticks: {
                  color: "black",
                },
              },
              y: {
                ticks: {
                  color: "black",
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            barPercentage: 0.5,
          },
        });

        setChartInstance(newChartInstance);
      }
    };

    createChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  // Check if there is any data to display
  const hasData = chartData.datasets.some((dataset) =>
    dataset.data.some((data) => data > 0)
  );

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "900px",
    height: "60vh",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const messageStyle = {
    fontSize: "18px",
    color: "#FF0000",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      {hasData ? (
        <canvas ref={chartRef} />
      ) : (
        <p style={messageStyle}>No data available</p>
      )}
    </div>
  );
};

export default BarChart;
