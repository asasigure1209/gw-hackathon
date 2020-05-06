import React from "react";
import Modal from "react-modal";
import PostForm from "./PostForm";

Modal.setAppElement("#root");

function PostModal({ isOpen, onClick }) {
  return (
    <Modal className='modal' isOpen={isOpen} onRequestClose={onClick}>
      <PostForm onClick={onClick}></PostForm>
    </Modal>
  );
}

export default PostModal;
