import styled from "@emotion/styled";

export const NewExpenseContainer = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 0 auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;

    &:hover,
    &:active {
      background-color: #510674;
      border-color: #510674;
    }

    &:focus {
      background-color: #7909ad;
    }

    &.alternative {
      color: #220131;
      border-color: transparent;
      background-color: transparent;
      &:hover,
      &:active {
        background-color: #ddb3f8;
      }
    }
  }
`;
