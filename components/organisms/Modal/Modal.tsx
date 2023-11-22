import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return <ModalOverlay>{children}</ModalOverlay>;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export default Modal;
