import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Header from './header';
import { useState } from 'react';
import { green, purple } from '@material-ui/core/colors';



function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  })
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#9fa8da'
      },
      secondary: purple,
    }
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Head>
        <title>My new cool app</title>
      </Head>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
