import React from "react"
import styled from "styled-components"
import { Code } from "../Code"

interface StyleProps {
  $primary?: boolean
}

const Button = styled.button<StyleProps>`
  background: ${(props) => (props.$primary ? "#045699" : "#808080")};
`

const Props = () => {
  return (
    <>
      <Button>Normal button</Button>
      <Button $primary>Primary button</Button>

      {code()}
    </>
  )
}

const code = () => {
  return (
    <Code
      code={`
				


				`}
    />
  )
}

export { Props }
