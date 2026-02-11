import styled, { keyframes } from 'styled-components';

// --- Animations ---
export const twinkle = keyframes` 0%, 100% {
                                      opacity: 1;
                                  }
                                      50% {
                                          opacity: 0.1;
                                      } `;
export const fadeIn = keyframes` 0% {
                                     opacity: 0;
                                     transform: translateY(40px);
                                 }
                                     100% {
                                         opacity: 1;
                                         transform: translateY(0);
                                     } `;
export const shake = keyframes` 0%, 10%, 100% {
                                    transform: translateX(0);
                                }
                                    2%, 6% {
                                        transform: translateX(-10px);
                                    }
                                    4%, 8% {
                                        transform: translateX(10px);
                                    } `;
export const zoom = keyframes` 0%, 100% {
                                   transform: scale(1.1);
                               }
                                   50% {
                                       transform: scale(1);
                                   } `;
export const float = keyframes`
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-15px) rotate(180deg);
    }
`;

export const generateStars = (count: number) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars += `${x}px ${y}px #FFF${i !== count - 1 ? ',' : ''} `;
  }
  return stars;
};

// --- Styled Components ---
export const Container = styled.div<{ $bgGradient: string }>`
    min-height: 100vh;
    width: 100%;
    background: ${props => props.$bgGradient};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div` position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh; `;

export const HeroSection = styled.section`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 40px;
    min-height: 100vh;
`;

export const NightSky = styled.div` position: absolute;
    inset: 0;
    overflow: hidden; `;

export const StarLayer = styled.div<{ size: number, density: number, speed: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: transparent;
    box-shadow: ${props => generateStars(props.density)};
    animation: ${twinkle} ${props => props.speed}s infinite ease-in-out;
    border-radius: 50%;
    position: absolute;

    &::after {
        content: " ";
        position: absolute;
        top: 2000px;
        width: ${props => props.size}px;
        height: ${props => props.size}px;
        box-shadow: ${props => generateStars(props.density)};
    }
`;

export const StarsBackground = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.8;
    z-index: -1;
    background-image: url('/assets/images/hero-bg.png');
    background-size: cover;
    background-position: center;
`;

export const Logo = styled.img<{ $size?: string; $animated?: boolean }>`
    height: ${props => props.$size || '120px'};
    width: auto;
    animation: ${props => props.$animated ? zoom : 'none'} 2s ease-in-out infinite;
`;

export const SlotMachine = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    opacity: 0;
    animation: ${fadeIn} 1.2s ease-out forwards;
    animation-delay: .5s;
`;

export const CasinoImage = styled.img` height: 200px; `;

export const Coin = styled.div<{ $delay: string; $size: number; $top?: string; $bottom?: string; $right: string }>`
    position: absolute;
    width: ${props => props.$size}px;
    height: ${props => props.$size}px;
    background: radial-gradient(circle at 30% 30%, #FFD700, #FFA500);
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.6), inset -2px -2px 6px rgba(0, 0, 0, 0.3), inset 2px 2px 6px rgba(255, 255, 255, 0.8);
    top: ${props => props.$top};
    bottom: ${props => props.$bottom};
    right: ${props => props.$right};
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: ${props => props.$delay};
`;

export const OpenGameButtonWrapper = styled.div` position: relative;
    animation: ${fadeIn} 1.2s ease-out forwards;
    opacity: 0;
    animation-delay: 1s; `;

export const OpenGameButton = styled.button<{ $gradient: string }>`
    background: ${props => props.$gradient};
    border: none;
    border-radius: 8px;
    padding: 16px 80px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    cursor: pointer;
    animation: ${shake} 3s ease-in-out infinite;
`;

export const BottomSection = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 60px 40px;
    background: linear-gradient(to right, #02011F 0%, #02011F 60%, #06225D 100%);
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        background: linear-gradient(to bottom, #02011F, #06225D);
    }
`;

export const BottomSectionLeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 1024px) {
        display: contents;
    }
`;

export const CertificationSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 1024px) {
        order: 4;
        align-items: center;
        text-align: center;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DownloadCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) {
        order: 1;
    }
`;

export const RightInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 1024px) {
        order: 2;
        align-items: center;
        width: 100%;
    }
`;

export const CharacterImage = styled.img`
    width: 288px;
    height: 288px;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const DownloadTitle = styled.h2` font-size: 24px;
    color: #FFFFFF;
    margin-bottom: 8px; `;
export const DownloadSubtitle = styled.p` font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 24px; `;
export const InstallButton = styled.button<{ $gradient: string }>`
    background: ${props => props.$gradient};
    border: none;
    border-radius: 8px;
    padding: 14px 40px;
    color: #FFFFFF;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;
export const DownloadIcon = styled.div` width: 20px;
    height: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 4px;
    position: relative;

    &::after {
        content: '↓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
    } `;
export const SocialSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;
    @media (max-width: 1024px) {
        order: 3;
        align-items: center;
    }
`;
export const SocialTitle = styled.p` font-size: 12px;
    color: rgba(255, 255, 255, 0.7); `;
export const SocialIcons = styled.div` display: flex;
    gap: 4px; `;
export const SocialIcon = styled.a` cursor: pointer; `;
export const AgeRestriction = styled.div` display: flex;
    align-items: center;
    gap: 12px; `;
export const AgeText = styled.span` font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
    max-width: 80px; `;
export const CertificationInfo = styled.div` display: flex;
    align-items: center;
    gap: 12px; `;
export const CertText = styled.p` font-size: 11px;
    color: rgba(255, 255, 255, 0.8);
    max-width: 200px;
    line-height: 1.4; `;