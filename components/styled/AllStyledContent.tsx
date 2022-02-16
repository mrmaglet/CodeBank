import React from "react"
import { StyledProps } from "../materialui/props-to-styled/StyledProps"
import { Basic } from "./Basic"
import { Props } from "./Props"

const AllStyledContent = () => {
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

export { AllStyledContent }
