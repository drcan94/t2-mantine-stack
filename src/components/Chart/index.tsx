import React from "react";
import { ChartContainer } from "./styles/index";
import ChartBar, { ChartBarProps } from "./ChartBar";

type ChartProps = {
  dataPoints: ChartBarProps[];
};

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));
  return (
    <ChartContainer>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        );
      })}
    </ChartContainer>
  );
};

export default Chart;
