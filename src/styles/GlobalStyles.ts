import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        overflow-x: hidden;
        font-family: sans-serif;
    }

    #root {
        width: 100%;
        min-height: 100vh;
    }
`;
