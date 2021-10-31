import "../styles/globals.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: "#2bb80f",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
