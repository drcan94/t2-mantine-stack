import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.blue[8] : theme.colors.blue[2]};
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[9]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  &:hover {
    cursor: pointer;

    background-color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.violet[6]
        : theme.colors.dark[2]};

    color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.gray[0]};
  }
`;
