import React from "react"
import { Basic } from "../../components/typescript/Basic"
import { Functions } from "../../components/typescript/Functions"
import { Nesting } from "../../components/typescript/Nesting"

const AllTypescriptContent = () => {
  return (
    <>
      <h2>Basic</h2>
      <Basic />

      <h2>Functions</h2>
      <Functions />

      <h2>Nesting</h2>
      <Nesting />
    </>
  )
}

export { AllTypescriptContent }
