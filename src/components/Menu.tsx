import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "@/styles/menu.css";

export const Menu = () => {
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

  return (
    <div
      ref={menuRef}
      className={`menu-container ${showMenu ? "show-menu" : ""}`}
    >
      
      <div className="menu-btn" onClick={handleChange}>
        <Icon icon="humbleicons:map" /> Map
      </div>

      <div className="menu-content">
        <div id="tv" className="items">
          <p>Social network</p>
        </div>
        <div id="resume" className="items">
          <p>Resume</p>
        </div>
        <div id="cs-degree" className="items">
          <p>CS degree</p>
        </div>
        <div id="pc" className="items">
          <p>Languages</p>
        </div>
        <div id="library" className="items">
          <p>Projects</p>
        </div>
      </div>

    </div>
  );
};
