import React from "react"
import styled from "styled-components"
import { Container } from "../components/layout/Container"
import { StyledProps } from "../components/materialui/props-to-styled/StyledProps"
import { Basic } from "../components/styled/Basic"
import { Props } from "../components/styled/Props"

const Div = styled.div`
  color: #f88e03;
`

const Styled = () => {
  return (
    <>
      <h1>Basic styled component</h1>
      <Basic />

      <h2>Ternary props</h2>
      <Props />

      <h2>Pass dynamic styled props in Material UI</h2>
      <StyledProps />
    </>
  )
}

export default Styled
