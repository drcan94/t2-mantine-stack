import { StyledBackdrop } from "./styles";

type BackdropProps = {
  onConfirm: () => void;
};

export const Backdrop: React.FC<BackdropProps> = ({ onConfirm }) => {
  return <StyledBackdrop onClick={onConfirm} />;
};
