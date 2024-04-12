import React from "react";
import Modal from "./Modal";
import { LANGUAGES, getI18N } from "@/i18n";
import "@/styles/languagePicker.css";
import { useLanguage } from "scripts/useLanguage";

export const LanguagePickerModal = ({
  locale = "en",
}: {
  locale: string | undefined;
}) => {
  const i18n = getI18N({ currentLocale: locale || "en" });
  const { isOpen, closeModal, isSelected, handleChangeLanguage } =
    useLanguage();
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} locale={locale}>
        <h4 className="title_modal">{i18n.LANGUAGE_PREFER}</h4>
        <p>
          {i18n.LANGUAGE_WE_HAVE}:{" "}
          <u
            className={`${isSelected(LANGUAGES.SPANISH)}`}
            onClick={() => handleChangeLanguage(LANGUAGES.SPANISH)}
          >
            {i18n.LANGUAGE_SPANISH}
          </u>
          {` ${i18n.OR} `}
          <u
            className={`${isSelected(LANGUAGES.ENGLISH)}`}
            onClick={() => handleChangeLanguage(LANGUAGES.ENGLISH)}
          >
            {i18n.LANGUAGE_ENGLISH}
          </u>
        </p>
      </Modal>
    </>
  );
};

export const LanguagePickerText = ({
  locale = "en",
}: {
  locale: string | undefined;
}) => {
  const i18n = getI18N({ currentLocale: locale || "en" });
  return (
    <div className="container">
      {locale === LANGUAGES.SPANISH ? (
        <a href="/"> {i18n.LANGUAGE_ENGLISH}</a>
      ) : (
        <a href={`/${LANGUAGES.SPANISH}`}>{i18n.LANGUAGE_SPANISH}</a>
      )}
    </div>
  );
};
