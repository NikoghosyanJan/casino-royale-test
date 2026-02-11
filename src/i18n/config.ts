import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      openGame: 'OPEN THE GAME',
      downloadCasino: 'Download Casino',
      playMin: 'Play Min anywhere, anytime',
      installApp: 'Install App',
      only18: 'Only 18+',
      certified: 'Casino is certified by the Anjouan Gaming Authority',
      usOnSocialMedia: 'Us on social media:',
      turkish: 'Turkish',
      english: 'English',
      russian: 'Russian',
    },
  },
  tr: {
    translation: {
      openGame: 'OYUNU AÇ',
      downloadCasino: 'Casino İndir',
      playMin: 'Her yerde, her zaman oyna',
      installApp: 'Uygulamayı Yükle',
      only18: 'Sadece 18+',
      certified: 'Casino, Anjouan Gaming Authority tarafından sertifikalandırılmıştır',
      usOnSocialMedia: 'Bizi sosyal medyada takip edin:',
      turkish: 'Türkçe',
      english: 'İngilizce',
      russian: 'Rusça',
    },
  },
  ru: {
    translation: {
      openGame: 'ОТКРЫТЬ ИГРУ',
      downloadCasino: 'Скачать Казино',
      playMin: 'Играй где угодно, когда угодно',
      installApp: 'Установить приложение',
      only18: 'Только 18+',
      certified: 'Казино сертифицировано Anjouan Gaming Authority',
      usOnSocialMedia: 'Мы в социальных сетях:',
      turkish: 'Турецкий',
      english: 'Английский',
      russian: 'Русский',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
