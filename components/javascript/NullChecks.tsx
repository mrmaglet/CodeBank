import React from "react"
import { Code } from "../Code"
import { Container } from "../layout/Container"

const NullChecks = () => {
  // Nullchecks

  const falsy = ""
  const truty = 4
  const value = undefined

  // if (falsy) console.log("Run if true")
  // if (!value) console.log("Run if false (for cause gards etc with early exit)")

  const obj = {
    name: "Magnus",
  }

  // const myString

  const validate = (toValidate = "MJAU") => {
    // Sets toValidate argument ONLY in the case of undefined.
    console.log(toValidate + " mög")
  }

  // validate(obj.city)

  //console.log(obj.city?.toUpperCase() && "FUCK")

  const validator = undefined

  //console.info(validator && "SHIT")

  //validator && console.log(validator.toString().toUpperCase())
  //if (validator) console.log(validator.toString().toUpperCase())

  //validator || console.log(validator.toString().toUpperCase() + ".")
  //if (!validator) console.log(validator.toString().toUpperCase() + ".")

  // console.log(validator?.toString().toUpperCase() + ".")

  return (
    <>
      <h3>Falsy</h3>
      <p>Javascript threats all these values as false.</p>
      <Code trim>
        {`if (false)
        if (null)
        if (undefined)
        if (0)
        if (-0)
        if (0n)
        if (NaN)
        if ("")`}
      </Code>
      <h4>Warning with falsy values!</h4>
      <p>Be aware that for example 0 kr might just be 0 kr and not false. </p>
      <p>Then a more direct comparison might be useful. </p>
      <Code>{`if (price === null || price === undefined)`}</Code>
      <h3>Null</h3>
      To check a <strong>null</strong> value in JavaScript, use equality operators like ==
      or ===.{" "}
      <strong>
        <em>
          The null value is not loosely equal to any of the other falsy values except
          undefined and null itself
        </em>
      </strong>
      .
      <Code>
        {`The value of data is:  null
          data == 0 false
          data == on false
          data==data true
          data==undefined true
          data==false false
          data==NaN false
          data=="" false`}
      </Code>
      <h3>Truthy</h3>
      <p>Javascript threats all these values as true.</p>
      <Code trim>
        {`if (true)
        if ({})
        if ([])
        if (42)
        if ("0")
        if ("false")
        if (new Date())
        if (-42)
        if (12n)
        if (3.14)
        if (-3.14)
        if (Infinity)
        if (-Infinity)`}
      </Code>
      <h3>Nullish coalescing operator (??)</h3>
      <Code>
        {`if (value) console.log("Run if true. Check before making operations that would crash runing values like undefined. For example .toUppercase()")
        if (!value) console.log("Run if false (for cause gards etc with early exit)")
        `}
      </Code>
      <h3>Nullish coalescing operator (??)</h3>
      <h3>Nullish coalescing operator (??)</h3>
    </>
  )
}

export { NullChecks }
