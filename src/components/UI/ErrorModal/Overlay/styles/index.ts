import styled from "@emotion/styled";
import { StyledCard } from "../../../CustomCard/styles";

export const StyledErrorCard = styled(StyledCard)`
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, -14%);
  width: 80%;
  z-index: 103;
  max-height: fit-content;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
    & h2 {
      margin: 0;
      color: white;
    }
  }

  & .content {
    padding: 1rem;
    color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.dark[9]};
  }

  & .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;
