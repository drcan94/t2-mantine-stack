import styled from "@emotion/styled";
import { StyledCard } from "../../../UI/CustomCard/styles";

export const UsersCard = styled(StyledCard)`
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0 1rem;
  & ul {
    padding: 1rem 0;
  }

  & li {
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.yellow[7]
        : theme.colors.gray[5]};
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.blue[7] : "black"};
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
