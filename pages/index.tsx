import React from "react"
import type { NextPage } from "next"
import Link from "next/link"

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
      </ul>

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
