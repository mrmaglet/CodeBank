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

const ImportedStyledComponent = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledPaper {...props}>{children}</StyledPaper>
}

export { ImportedStyledComponent }
