import React from "react";
import {
  ChartBarContainer,
  ChartBarInner,
  ChartBarFill,
  ChartBarLabel,
} from "./styles/index";

export type ChartBarProps = {
  label: string;
  value: number;
  maxValue?: number | null;
};

const ChartBar: React.FC<ChartBarProps> = ({ label, value, maxValue }) => {
  return (
    <ChartBarContainer>
      <ChartBarInner>
        <ChartBarFill value={value} maxValue={maxValue} />
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </ChartBarContainer>
  );
};

export default ChartBar;
