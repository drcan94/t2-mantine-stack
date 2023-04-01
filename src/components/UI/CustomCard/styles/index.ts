import styled from "@emotion/styled";
import type { MantineTheme } from "@mantine/core";

export const StyledCard = styled.div<{ theme: MantineTheme }>`
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark"
      ? theme.colors.yellow[2]
      : theme.colors.red[0]};
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.26);
  padding: 20px;
  margin-bottom: 20px;
`;
