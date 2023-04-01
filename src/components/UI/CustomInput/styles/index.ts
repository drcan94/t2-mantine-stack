import styled from "@emotion/styled";

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.blue[8]};
`;

export const StyledInput = styled.input`
  font: inherit;
  display: block;
  width: calc(${({ theme }) => theme.breakpoints.xs} - 14em);
  max-width: 100%;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 0.3rem 0.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.dark[7]};
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[1]};
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: calc(${({ theme }) => theme.breakpoints.xs} - 6em);
  }
  &:focus {
    outline: none;
    border-color: #0ce3ee;
  }
`;
