import spanish from "./es.json";
import english from "./en.json";

interface ILanguages {
  SPANISH: string;
  ENGLISH: string;
}

const LANGUAGES: ILanguages = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({
  currentLocale,
}: {
  currentLocale: string;
}) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  if (currentLocale === LANGUAGES.ENGLISH) return english;

  return english;
};
