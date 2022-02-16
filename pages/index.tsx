import React from "react"
import type { NextPage } from "next"
import Link from "next/link"
// import { StyledProps } from "../components/materialui/props-to-styled/ImportedStyledProps"
import { StyledProps } from "../components/materialui/props-to-styled/StyledProps"
import { StateUpdates } from "../components/react/state-updates/StateUpdate"

const Home: NextPage = () => {
  return (
    <>
      <h2>Code Bank</h2>
      <ul>
        <li>
          <Link href="/javascript">Javascript</Link>
        </li>
        <li>
          <Link href="/styled">Styled Components</Link>
        </li>
        <li>
          <Link href="/typescript">TypeScript</Link>
        </li>
        <li>
          <Link href="/react">React</Link>
        </li>
      </ul>

      <h1>Content</h1>

      <h2>Todo</h2>
      <ul>
        <li>Designpattern loading</li>
        <li>Designpattern debounce</li>
        <li>Designpattern error messages</li>
      </ul>
    </>
  )
}

export default Home
