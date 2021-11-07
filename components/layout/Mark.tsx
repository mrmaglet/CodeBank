import React from "react"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

const StyledSpan = styled.span`
  background: #dbdbdb;
  padding: 0 4px 1px;
  border-radius: 4px;
`

const Mark = ({ children, ...props }: Props) => {
  return <StyledSpan {...props}>{children}</StyledSpan>
}

export { Mark }
