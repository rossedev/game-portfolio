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
  const currentUrl = location.href;
  let language = "en";

  if (currentUrl) {
    const partURI = currentUrl.split("/");
    const lastElement = partURI[partURI.length - 1];

    if (lastElement === "es") {
      language = lastElement;
    } else {
      language = "en";
    }
  }

  return language;
};
