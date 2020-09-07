import React, { useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import { StateContext } from "../../index";

export default function Chart() {
  const stateContext = useContext(StateContext);
  const options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: stateContext?.chartData?.categories || [],
    },
    series: stateContext?.chartData?.series || [],
    legend: { itemStyle: { textTransform: "capitalize" } },
    tooltip: {
      style: { textTransform: "capitalize" },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            yAxis: {
              labels: {
                align: "left",
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
          },
        },
      ],
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
