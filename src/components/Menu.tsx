import React from "react";
import { Icon } from "@iconify/react";
import "@/styles/menu.css";
import { getI18N } from "@/i18n";
import { useMenu } from "scripts/useMenu";

export const Menu = ({ locale }: any) => {
  const i18n = getI18N({ currentLocale: locale || "en" });
  const { showMenu, menuRef, handleChange } = useMenu();

  return (
    <div
      ref={menuRef}
      className={`menu-container ${showMenu ? "show-menu" : ""}`}
    >
      <div className="menu-btn" onClick={handleChange}>
        <Icon icon="humbleicons:map" /> <p>{i18n.MAP}</p>
      </div>

      <div className="menu-content">
        <div id="tv" className="items">
          <p>{i18n.NETWORK_TITLE}</p>
        </div>
        <div id="resume" className="items">
          <p>{i18n.RESUME_TITLE}</p>
        </div>
        <div id="cs-degree" className="items">
          <p>{i18n.CS_DEGREE_TITLE}</p>
        </div>
        <div id="pc" className="items">
          <p>{i18n.LANGUAGES_TITLE}</p>
        </div>
        <div id="projects" className="items">
          <p>{i18n.PROJECTS_TITLE}</p>
        </div>
      </div>
    </div>
  );
};
