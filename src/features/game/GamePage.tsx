import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { getGameUrl } from './constants';

const GamePage: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const gameUrl = useMemo(() =>
      getGameUrl('n2-novomatic-book-of-ra-deluxe', i18n.language),
    [i18n.language]);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <S.PageContainer>
      <S.CloseButton onClick={handleClose} aria-label="Close game">
        ✕
      </S.CloseButton>
      <S.GameIframe
        src={gameUrl}
        title="Casino Game"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </S.PageContainer>
  );
};

export default GamePage;