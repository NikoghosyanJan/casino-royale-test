import styled from 'styled-components';

export const PageContainer = styled.div`
  position: fixed;
  inset: 0; 
  background: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 40px;
    right: 20px;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: scale(1.1) rotate(90deg);
        border-color: rgba(255, 255, 255, 0.5);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const GameIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  flex-grow: 1;
`;