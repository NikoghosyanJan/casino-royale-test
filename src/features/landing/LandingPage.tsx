import React from 'react';
import * as S from './styles';
import { useLandingPage } from './useLandingPage';
import IconInstagram from "../../components/ui/icons/IconInstagram";
import IconCertificate from "../../components/ui/icons/IconCertificate";
import Icon18Plus from "../../components/ui/icons/Icon18plus";
import GeoSelector from "../../components/GeoSelector";
import casinoImg from '../../../public/assets/images/casino.png';
import logoImg from '../../../public/assets/images/logo.png';
import removalImg from '../../../public/assets/images/removal.png';

const LandingPage: React.FC = () => {
  const { t, currentGeo, currentConfig, handleGeoChange, handleOpenGame } = useLandingPage();

  return (
    <S.Container $bgGradient={currentConfig.backgroundColor}>
      <S.ContentWrapper>
        <S.HeroSection>
          <S.StarsBackground/>
          <S.NightSky>
            <S.StarLayer size={1} density={700} speed={4}/>
            <S.StarLayer size={2} density={200} speed={4}/>
            <S.StarLayer size={3} density={100} speed={4}/>
          </S.NightSky>
          <S.Logo src={logoImg} $animated/>
          <S.SlotMachine>
            <S.CasinoImage src={casinoImg}/>
            <S.Coin $size={48} $delay="0s" $top="30px" $right="20px" />
            <S.Coin $size={56} $delay="1s" $top="-20px" $right="0" />
            <S.Coin $size={64} $delay="2s" $bottom="-30px" $right="-60px" />
          </S.SlotMachine>
          <S.OpenGameButtonWrapper>
            <S.OpenGameButton $gradient={currentConfig.buttonGradient} onClick={handleOpenGame}>
              {t('openGame')}
            </S.OpenGameButton>
          </S.OpenGameButtonWrapper>
        </S.HeroSection>

        <S.BottomSection>
          <S.BottomSectionLeftSide>
            <S.CharacterImage src={removalImg}/>
            <S.DownloadCard>
              <S.Logo $size="80px" src={logoImg}/>
              <S.DownloadTitle>{t('downloadCasino')}</S.DownloadTitle>
              <S.DownloadSubtitle>{t('playMin')}</S.DownloadSubtitle>
              <S.InstallButton $gradient={currentConfig.buttonGradient}>
                <S.DownloadIcon/>
                {t('installApp')}
              </S.InstallButton>
            </S.DownloadCard>

            <S.CertificationSection>
              <S.AgeRestriction>
                <Icon18Plus/>
                <S.AgeText>{t('only18')}</S.AgeText>
              </S.AgeRestriction>
              <S.CertificationInfo>
                <IconCertificate/>
                <S.CertText>{t('certified')}</S.CertText>
              </S.CertificationInfo>
            </S.CertificationSection>
          </S.BottomSectionLeftSide>

          <S.RightInfoSection>
            <GeoSelector currentGeo={currentGeo} onGeoChange={handleGeoChange}/>
            <S.SocialSection>
              <S.SocialTitle>{t('usOnSocialMedia')}</S.SocialTitle>
              <S.SocialIcons>
                {[...Array(4)].map((_, i) => (
                  <S.SocialIcon key={i}><IconInstagram/></S.SocialIcon>
                ))}
              </S.SocialIcons>
            </S.SocialSection>
          </S.RightInfoSection>
        </S.BottomSection>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default LandingPage;