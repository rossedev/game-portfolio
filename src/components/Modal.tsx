import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/modal.css'

const Modal = ({ isOpen, onClose, children }:any) => {
  if (!isOpen) return null;

  const handleClose = () => {
    const canvas = document.getElementById("game") as HTMLInputElement;
    canvas.focus();
    onClose()
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}

        <button className="modal-close-btn" onClick={handleClose}>
          Lo entiendo!
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLInputElement
  );
};

export default Modal;