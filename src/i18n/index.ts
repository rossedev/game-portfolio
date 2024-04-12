import spanish from "./es.json";
import english from "./en.json";

interface ILanguages {
  SPANISH: string;
  ENGLISH: string;
}

export const LANGUAGES: ILanguages = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const languagesList = {
  es: "Español",
  en: "English",
};


export const getI18N = ({ currentLocale }: { currentLocale: string }) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;

  return english;
};

export const getLanguage = () => {
  let language: string | null = "en";

  if (typeof localStorage !== "undefined" && localStorage.getItem("language")) {
    language = localStorage.getItem("language");
  }

  return language || "en";
};
