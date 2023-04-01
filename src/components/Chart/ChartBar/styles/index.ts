import styled from "@emotion/styled";

export const ChartBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1rem;
`;

export const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ChartBarFill = styled.div<{
  value: number;
  maxValue?: number | null;
}>`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${({ value, maxValue }) =>
    `${maxValue && maxValue > 0 ? Math.round((value / maxValue) * 100) : 0}%`};
`;

export const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: #313131;
`;
