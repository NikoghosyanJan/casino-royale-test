import React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GeoLocale, geoConfigs } from '../../types/geo';
import * as S from './styles';

interface GeoSelectorProps {
  currentGeo: GeoLocale;
  onGeoChange: (locale: GeoLocale) => void;
}

const GeoSelector: React.FC<GeoSelectorProps> = ({ currentGeo, onGeoChange }) => {
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onGeoChange(event.target.value as GeoLocale);
  };

  return (
    <S.SelectorWrapper>
      <S.StyledSelect
        value={currentGeo}
        onChange={handleChange}
        variant="outlined"
        MenuProps={S.MenuPropsConfig}
      >
        {Object.values(geoConfigs).map((config) => (
          <S.StyledMenuItem key={config.locale} value={config.locale}>
            <S.Flag>{config.flag}</S.Flag>
            <S.LabelText>{t(config.label)}</S.LabelText>
          </S.StyledMenuItem>
        ))}
      </S.StyledSelect>
    </S.SelectorWrapper>
  );
};

export default GeoSelector;