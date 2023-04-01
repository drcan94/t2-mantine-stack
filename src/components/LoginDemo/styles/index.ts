import styled from "@emotion/styled";
import type { MantineTheme } from "@mantine/core";
export const FormControl = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const FormLabel = styled.label<{ theme: MantineTheme }>`
  display: block;
  font-weight: bold;
  flex: 1;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[7]};
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input<{ isValid: boolean | null }>`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-color: ${({ isValid }) => (!isValid ? "red" : "unset")};
  background: ${({ isValid }) => (!isValid ? "#fbdada" : "unset")};

  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

export const Actions = styled.div`
  text-align: center;
`;
