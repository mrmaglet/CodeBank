import React, { useEffect, useState } from "react"

const useStateUpdate = () => {
  const [values, setValues] = useState<any>({ zipCode: 35233 })
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  // useEffect(() => {
  //   // if (errorMessage === "") {
  //   setIsValid(false)
  //   // }
  // }, [errorMessage])

  const validate = () => {
    isString()
    // return isValid
  }

  const isString = () => {
    // if (typeof values.zipCode === "string") return

    setErrorMessage("Not a string")
  }

  return { validate, isValid, errorMessage }
}

export { useStateUpdate }
