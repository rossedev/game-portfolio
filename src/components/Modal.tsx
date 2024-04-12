import React, { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import anime from "animejs";

import '@/styles/modal.css'
import { getI18N } from '@/i18n';

interface IModalProps {
  isOpen:boolean
  onClose:() => void
  children: ReactNode
  locale:string | undefined
}

const Modal = ({ isOpen, onClose, children, locale }: IModalProps) => {
  const i18n = getI18N({ currentLocale: locale || "en" });
  if (!isOpen) return null;

  useEffect(() => {
    anime({
      targets: ".modal",
      translateZ: [200, 0],
      opacity: [1],
      duration: 500,
      easing: "easeOutQuad",
    });
  }, []);

  const handleClose = () => {
    const canvas = document.getElementById("game") as HTMLInputElement;
    canvas.focus();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}

        <button className="modal-close-btn" onClick={handleClose}>
          {i18n.GET_IT} 
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLInputElement
  );
};

export default Modal;