import { useEffect, useRef, useState } from "react";

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  return {
    showMenu,
    menuRef,
    handleChange,
  };
};
