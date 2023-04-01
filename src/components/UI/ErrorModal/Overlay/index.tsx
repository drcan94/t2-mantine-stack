import { type ErrorType } from "../../../Users/AddUser";
import { StyledErrorCard } from "./styles";
import CustomButton from "../../CustomButton";
import { useMantineTheme } from "@mantine/core";

type OverlayProps = {
  title: string;
  errorList: ErrorType[];
  onConfirm: () => void;
};

export const ModalOverlay: React.FC<OverlayProps> = ({
  title,
  errorList,
  onConfirm,
}) => {
  const theme = useMantineTheme();
  return (
    <StyledErrorCard theme={theme}>
      <header>
        <h2>{title}</h2>
      </header>
      <div className="content">
        {errorList.map((error, index) => (
          <p key={error.fieldName}>
            {index + 1} - <strong>{error.fieldName}</strong>:{" "}
            {error.errorMessage}
          </p>
        ))}
      </div>
      <footer className="actions">
        <CustomButton onClick={onConfirm}>Okay</CustomButton>
      </footer>
    </StyledErrorCard>
  );
};
