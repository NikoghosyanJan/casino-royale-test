export type GeoLocale = 'en' | 'tr' | 'ru';

export interface GeoConfig {
  locale: GeoLocale;
  flag: string;
  label: string;
  primaryColor: string;
  accentColor: string;
  buttonGradient: string;
  backgroundColor: string;
}

export const geoConfigs: Record<GeoLocale, GeoConfig> = {
  en: {
    locale: 'en',
    flag: '🇬🇧',
    label: 'English',
    primaryColor: '#FF9F66',
    accentColor: '#FFB84D',
    buttonGradient: 'linear-gradient(180deg, #FFB84D 0%, #FF9F66 100%)',
    backgroundColor: 'radial-gradient(ellipse at center, #1a4a6e 0%, #0a1929 70%)',
  },
  tr: {
    locale: 'tr',
    flag: '🇹🇷',
    label: 'Turkish',
    primaryColor: '#E63946',
    accentColor: '#F1FAEE',
    buttonGradient: 'linear-gradient(180deg, #E63946 0%, #A8323C 100%)',
    backgroundColor: 'radial-gradient(ellipse at center, #2c1810 0%, #0a0604 70%)',
  },
  ru: {
    locale: 'ru',
    flag: '🇷🇺',
    label: 'Russian',
    primaryColor: '#4A90E2',
    accentColor: '#67B8FF',
    buttonGradient: 'linear-gradient(180deg, #67B8FF 0%, #4A90E2 100%)',
    backgroundColor: 'radial-gradient(ellipse at center, #1e2a3a 0%, #0f1419 70%)',
  },
};
