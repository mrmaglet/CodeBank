import React from "react"
import styled from "styled-components"
import { Code } from "../Code"

interface StyledProps {
  primary?: boolean
}

const Button = styled.button<StyledProps>`
  background: ${(props) => (props.primary ? "#045699" : "#808080")};
  color: white;
`

const Props = () => {
  return (
    <>
      <Button>Normal button</Button>
      <Button primary>Primary button</Button>

      <Code>
        {`
import React from "react"
import styled from "styled-components"
import { Code } from "../Code"

interface StyledProps {
  primary?: boolean
}

const Button = styled.button<StyledProps>\`
  background: \${(props) => (props.primary ? "#045699" : "#808080")};
  color: white;
\`

const Props = () => {
return (
  <>
    <Button>Normal button</Button>
    <Button primary>Primary button</Button>

    {code()}
  </>
)
}
  `}
      </Code>
    </>
  )
}

export { Props }
