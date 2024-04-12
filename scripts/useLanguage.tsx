import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    verifyOpenModal();
  }, []);

  const verifyOpenModal = () => {
    const isFirstVisit = localStorage.getItem("hasVisited") === null;
    const isModalClosed = localStorage.getItem("modalClosed") === "true";

    if (isFirstVisit && !isModalClosed) {
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("modalClosed", "true");
    addLangaugeInLocation();
  };

  const addLangaugeInLocation = () => {
    const newLanguagePath =
      selectedLanguage === "en" ? "" : `/${selectedLanguage}`;
    window.location.replace(`${window.location.origin}${newLanguagePath}`);
  };

  const handleChangeLanguage = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
  };

  const isSelected = (language: string) => {
    return language === selectedLanguage ? "isSelected" : "";
  };

  return {
    isOpen,
    closeModal,
    isSelected,
    handleChangeLanguage,
  };
};
