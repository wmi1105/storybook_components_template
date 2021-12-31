//https://velog.io/@seungsang00/React-React-Modal

import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "react-modal";

export function PopModal() {
  const [modalOpen, setModalOpen] = useState(true);

  const setModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={setModalClose}
      style={customStyle}
    >
      <PopModalStyled>modal</PopModalStyled>
    </Modal>
  );
}

const PopModalStyled = styled.div`
  background-color: pink;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const customStyle: Modal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#d6d6d6f6",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
