import React from "react"
import { NestedClassComponent } from "./NestedClassComponent"
import { NestedStyledComponent } from "./NestedStyledComponent"
import { NestedSpreadComponent } from "./NestedSpreadComponent"

const StyledProps = () => {
  return (
    <>
      <NestedClassComponent color="red" elevation={3} />
      <br />
      <NestedStyledComponent color="orange" elevation={10} /> <br />
      <NestedSpreadComponent
        background="blue"
        width="200px"
        elevation={2}
        otherProps="mu"
      />
    </>
  )
}

export { StyledProps }
