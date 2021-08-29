import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from "react-router-dom";
import { createAppTheme } from './shared/theme';
import Router from './Router';

const App = () => {
  const theme = createAppTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <Router />
          </>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
