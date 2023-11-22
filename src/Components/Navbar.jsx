import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n, t } = useTranslation("global");

  const changeLanguage = (lng) => {
    console.log(lng); // Agrega esto para depurar
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("es")}>ES</button>
      </div>
<div>
      <a href="#home"> Sara Marulanda </a>

      <div>
        <div>
          <a href="#home"> {t("navbar.op1")}</a>
        </div>
        <div>
          <a href="#about"> {t("navbar.op2")}</a>
        </div>
        <div>
          <a href="#projects"> {t("navbar.op3")}</a>
        </div>
        <div>
          <a href="#skills"> {t("navbar.op4")}</a>
        </div>
        <div>
          <a href="#contact"> {t("navbar.op5")}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
