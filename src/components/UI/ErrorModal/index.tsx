import React from "react";
import { ErrorType } from "../../Users/AddUser/index";
import { createPortal } from "react-dom";
import { Backdrop } from "./Backdrop/index";
import { ModalOverlay } from "./Overlay/index";

type ErrorModalProps = {
  title: string;
  errorList: ErrorType[];
  onConfirm: () => void;
};

const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  errorList,
  onConfirm,
}) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          errorList={errorList}
          onConfirm={onConfirm}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
