import React from "react"
import styled from "styled-components"
import { Container } from "../components/layout/Container"
import { Basic } from "../components/styled/Basic"
import { Props } from "../components/styled/Props"

const Div = styled.div`
  color: #f88e03;
`

const Styled = () => {
  return (
    <>
      <Container>
        <h1>Basic styled component</h1>
        <Basic />

        <h1>Ternary props</h1>
        <Props />
      </Container>
    </>
  )
}

export default Styled