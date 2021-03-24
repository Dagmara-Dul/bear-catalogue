import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#ffffff',
    fontColor: '#4b4e53'
};

export const darkTheme = {
    body: '#000000',
    fontColor: '#cccccc',
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body}
    }

    body {
        color: ${(props) => props.theme.fontColor}
    }
`