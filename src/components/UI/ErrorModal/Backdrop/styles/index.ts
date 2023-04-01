import styled from "@emotion/styled";

export const StyledBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 102;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
  overflow-y: hidden;
`;
