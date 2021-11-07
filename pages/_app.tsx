import "../styles/globals.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import { theme } from "../components/styled/theme"
import { Container } from "../components/layout/Container"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
export default MyApp
