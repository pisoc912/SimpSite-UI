import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head';
import '../styles/globals.css';


function App({ Component, pageProps }) {
  // const [darkMode, setDarkMode] = useState(false);


  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  })
  const lightTheme = createTheme({})

  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div>
      <Head>
        <title>SimpSite</title>
      </Head>
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Component {...pageProps} />
    </div>
    // </ThemeProvider>
  );
}

export default App;
