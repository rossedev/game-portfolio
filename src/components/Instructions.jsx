import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Instructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
     const isFirstVisit = localStorage.getItem("hasVisited") === null;
     const isModalClosed = localStorage.getItem("modalClosed") === "true";

     if (isFirstVisit && !isModalClosed) {
       openModal();
     }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h4 style={{ marginBottom: "2rem" }}>Instrucciones</h4>
        <p>{`>>`} Puedes usar el mouse o el teclado</p>
        <p>{`>>`} En algunos los objetos, puedes ver mensajes</p>
        <p>{`>>`} Cierras los mensajes con: ESC, Enter o Botón cerrar</p>
        <p>{`>>`} Disfruta!</p>
      </Modal>
    </>
  );
};

export default Instructions;
