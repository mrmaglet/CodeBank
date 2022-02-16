import React from "react"
import { useStateUpdate } from "./useStateUpdate"

const StateUpdates = () => {
  const { validate, isValid, errorMessage } = useStateUpdate()

  validate()
  // console.log(isValid)

  return (
    <>
      {/* IsValid: {isValid.toString()} <br /> */}
      {/* Error: {errorMessage} */}
    </>
  )
}

export { StateUpdates }
