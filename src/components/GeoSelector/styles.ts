import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';

export const SelectorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 1200px) {
        margin-top: 20px;
        margin-bottom: 30px;
    }
`;

export const StyledSelect = styled(Select)`
    && {
        width: 100%;
        min-width: 290px;
        max-width: 300px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        color: #FFFFFF;
        font-size: 14px;
        transition: all 0.3s ease;

        & .MuiSelect-select {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 16px 14px;
        }

        & .MuiOutlinedInput-notchedOutline {
            border-color: rgba(255, 255, 255, 0.1);
        }

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: rgba(255, 255, 255, 0.3);
        }

        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: rgba(255, 255, 255, 0.5);
            border-width: 1px;
        }

        & .MuiSvgIcon-root {
            color: rgba(255, 255, 255, 0.7);
        }
    }
`;

export const StyledMenuItem = styled(MenuItem)`
    && {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        color: #FFFFFF;
        font-size: 14px;

        &:hover {
            background-color: rgba(255, 255, 255, 0.08);
        }

        &.Mui-selected {
            background-color: rgba(255, 255, 255, 0.12);

            &:hover {
                background-color: rgba(255, 255, 255, 0.18);
            }
        }
    }
`;

export const Flag = styled.span`
    font-size: 1.2rem;
    line-height: 1;
`;

export const LabelText = styled.span`
    font-weight: 500;
`;

export const MenuPropsConfig = {
  PaperProps: {
    sx: {
      backgroundColor: 'rgba(15, 20, 35, 0.95)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      marginTop: '8px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      '& .MuiList-root': {
        padding: '4px',
      }
    },
  },
};