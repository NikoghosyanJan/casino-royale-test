import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GeoLocale, geoConfigs } from '../../types/geo';

export const useLandingPage = () => {
  const { t, i18n } = useTranslation();
  const [currentGeo, setCurrentGeo] = useState<GeoLocale>('en');

  const currentConfig = geoConfigs[currentGeo];

  const handleGeoChange = (locale: GeoLocale) => {
    setCurrentGeo(locale);
    i18n.changeLanguage(locale);
  };

  const handleOpenGame = () => {
    const gameWindow = window.open('/game', '_blank');

    if (gameWindow) {
      gameWindow.opener = null;
    }
  };

  return {
    t,
    currentGeo,
    currentConfig,
    handleGeoChange,
    handleOpenGame
  };
};