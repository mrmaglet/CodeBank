import React, { PropsWithChildren, ReactNode } from "react"
import { Paper, PaperProps, styled } from "@material-ui/core"

interface Props extends PaperProps {
  // Extends PaperProps to accept prop elevation and other material specific props
  color: string
  children: ReactNode
}

const StyledPaper = styled(Paper)(({ color }: Props) => ({
  background: `${color}`,
}))

const ReusableStyledComponent = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledPaper {...props}>{children}</StyledPaper>
}

export { ReusableStyledComponent }

import { Code } from "../../Code"

export const ReusableStyledComponentPrint = () => {
  return (
    <Code raw>{`import React, { PropsWithChildren, ReactNode } from "react"
import { Paper, PaperProps, styled } from "@material-ui/core"

interface Props extends PaperProps {
  // Extends PaperProps to accept prop elevation and other material specific props
  color: string
  children: ReactNode
}

const StyledPaper = styled(Paper)(({ color }: Props) => ({
  background: \`\${color}\`,
}))

const ImportedStyledComponent = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledPaper {...props}>{children}</StyledPaper>
}

export { ImportedStyledComponent, ImportedStyledComponentPrint }
`}</Code>
  )
}
