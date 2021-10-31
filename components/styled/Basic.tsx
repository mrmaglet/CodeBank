import React from "react"
import styled from "styled-components"
import { Code } from "../Code"

const Div = styled.div`
  color: #f88e03;
`

const Basic = () => {
  return (
    <>
      <Div>Styled DIV</Div>

      {code()}
    </>
  )
}

const code = () => {
  return (
    <Code
      code={`
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
    />
  )
}

export { Basic }
