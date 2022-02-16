import React, { PropsWithChildren } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"
import beautify from "js-beautify"

interface ICode {
  children?: any
  raw?: true | false // Skips beautify
  trim?: true | false // Remove leading space
}

const removeLeadingSpaces = (text: string) => {
  const lines = text?.split("\n")
  const trimedLines = lines.map((line) => line.trimStart())

  return trimedLines.join("\n")
}

const Code = ({ children = "", raw = false, trim = false }: PropsWithChildren<ICode>) => {
  if (!raw) children = beautify(children)
  if (trim) children = removeLeadingSpaces(children)

  return (
    <>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </>
  )
}

export { Code }
