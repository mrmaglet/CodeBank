import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface ICode {
  code: string
}

const Code = ({ code }: ICode) => {
  return (
    <>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </>
  )
}

export { Code }
