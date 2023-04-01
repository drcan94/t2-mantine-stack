import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark"
      ? theme.colors.dark[6]
      : theme.colors.indigo[1]};
  max-width: 100%;
  border-radius: 10px;
  height: 2.5rem;
  padding: 0 15px;
  box-shadow: 0 0 8px #ddd;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.25rem;
    font-weight: 500;
    margin-left: 8px;
    color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.dark[4]};
    ::placeholder {
      color: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[2]
          : theme.colors.dark[4]};
    }
  }

  input:focus {
    outline: none;
  }
`;
