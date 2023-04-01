import styled from "@emotion/styled";

export const ExpenseItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 0.6rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
  

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
`;
export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  & h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }

  @media (min-width: 580px) {
    & h2 {
      font-size: 1.25rem;
    }
  }
`;
export const ItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;
