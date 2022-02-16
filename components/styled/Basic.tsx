import React from "react"
import styled from "styled-components"
import { Code } from "../common/Code"

const Div = styled.div`
  color: #f88e03;
`

const Basic = () => {
  return (
    <>
      <Div>Styled DIV</Div>

      <Code>
        {`\
import React from "react"
import styled from "styled-components"
import { Code } from "../Code"

const Div = styled.div\`
  color: #f88e03;
\`

const Basic = () => {
  return (
    <>
      <Div>Styled DIV</Div>
    </>
  )
}

export { Basic }
				`}
      </Code>
    </>
  )
}

export { Basic }
