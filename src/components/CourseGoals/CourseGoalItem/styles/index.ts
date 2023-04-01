import styled from "@emotion/styled";

export const GoalItem = styled.div`
  margin: 1rem 0;
  background: ${({ theme }) => theme.colorScheme === 'dark' ? theme.colors.orange[8] : theme.colors.green[8]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: ${({ theme }) => theme.colorScheme === 'dark' ? theme.colors.yellow[1] : theme.colors.teal[1]};
  padding: 1rem 2rem;
  cursor: pointer;
`;
