import styled from "@emotion/styled";



export const GoalForm = styled.section`
  width: 30rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;




export const FormControl = styled.div<{ isValid: boolean }>`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border: ${({ isValid }) => (isValid ? "1px solid #ccc" : "1px solid red")};
    border-radius: 10px;
    padding: 2px 8px;

    &:focus {
      outline: none;
    }
  }
`;

