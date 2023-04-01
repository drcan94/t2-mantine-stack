import styled from "@emotion/styled";
import type { MantineTheme, TextProps } from "@mantine/core";
import { Text } from "@mantine/core";

export const SearchResultContainer = styled(Text)<
  TextProps & { theme: MantineTheme }
>`
  padding: 10px 20px;
  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[3]};
  }
`;
