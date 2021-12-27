import React, { PropsWithChildren } from "react"
import { Paper, styled, Box, PaperProps } from "@material-ui/core"
import { Code } from "../../Code"

interface Props extends PaperProps {
  color: string
  otherStuff?: number
}

// If color is the only prop - you don't need this extra interface.
// Now the otherStuff prop will cause a type error. You could spread
// all {...props} in the jsx component but if you deconstruct otherStuff
// in the functional component that is not possible(?) You could aso use
// type "any" instead of "Styles" below to skip this interface.
interface Styles {
  colorprop: string
}

// Alternative 1
const StyledPaper = styled(Paper)(({ colorprop }: Styles) => ({
  background: `${colorprop}`,
}))

// Alternative 2
const StyledPapirum = styled(Paper)({
  background: (props: Styles) => props.colorprop, // use any here to skip the extra interface
})

const NestedStyledComponent = ({
  color,
  otherStuff,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <>
      <StyledPaper colorprop={color} {...props}>
        Nested Styled Orange Component alternative 1
      </StyledPaper>
      <br />
      <StyledPapirum colorprop={color} {...props}>
        Nested Styled Orange Component alternative 2
      </StyledPapirum>
    </>
  )
}

export { NestedStyledComponent }

export const NestedStyledComponentPrint = () => {
  return (
    <Code raw>{`import React, { PropsWithChildren } from "react"
import { Paper, styled, Box, PaperProps } from "@material-ui/core"

interface Props extends PaperProps {
  color: string
  otherStuff?: number
}

// If color is the only prop - you don't need this extra interface.
// Now the otherStuff prop will cause a type error. You could spread
// all {...props} in the jsx component but if you deconstruct otherStuff
// in the functional component that is not possible(?) You could aso use
// type "any" instead of "Styles" below to skip this interface.
interface Styles {
  colorProp: string
}

// Alternative 1
const StyledPaper = styled(Paper)(({ colorProp }: Styles) => ({
  background: \`\${colorProp}\`,
}))

// Alternative 2
const StyledPapirum = styled(Paper)({
  background: (props: Styles) => props.colorProp, // use any here to skip the extra interface
})

const NestedStyledComponent = ({
  color,
  otherStuff,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <>
      <StyledPaper colorProp={color} {...props}>
        Nested Styled Orange Component alternative 1
      </StyledPaper>
      <br />
      <StyledPapirum colorProp={color} {...props}>
        Nested Styled Orange Component alternative 2{" "}
      </StyledPapirum>
    </>
  )
}

export { NestedStyledComponent }`}</Code>
  )
}
