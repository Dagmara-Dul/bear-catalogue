import React, { useState } from 'react';
import Root from './Root/Root'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './themes'

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Root themeToggler={themeToggler}>
      </Root>
    </ThemeProvider>
  );
}

export default App;
