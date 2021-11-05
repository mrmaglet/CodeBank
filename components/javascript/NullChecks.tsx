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

  if (value) alert("mu")

  const obj = {
    name: "Magnus",
  }

  // const myString

  const validate = (toValidate = "MJAU") => {
    // Sets toValidate parameter to MJAU ONLY in the argument is undefined.
    console.log("tovalidate: ", toValidate)
  }

  const test: any = NaN
  validate(test)

  let price: any = 0
  console.log("price is 0")
  if (!price) console.error("!price")
  if (price) console.error("price")
  if (price == null) console.error("price == null")

  console.log("########################")

  price = null
  console.log("price is null")
  if (!price) console.error("!price")
  if (price) console.error("price")
  if (price == null) console.error("price == null")

  console.log("########################")

  price = undefined
  console.log("price is undefined")
  if (!price) console.error("!price")
  if (price) console.error("price")
  if (price == null) console.error("price == null")

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
      <p>
        Be aware that for example 0 kr might just be 0 kr and not false. <br />
        Then a more direct comparison might be useful.{" "}
      </p>
      <Code>{`const data = {
        product: "Free candy",
        price: 0
      }
      
      // Would not show price 0 kr at all because of falsy!
      if (data.price) <Cost>data.price</Cost>  
      
      // Output 0 kr. Note that nullcheck loosely compared also detect undefined. 
      // Below is the same as !x == null || !x == undefined
      if (!data.price == null) <Cost>data.price</Cost>  
      }`}</Code>
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
      <h3>Null checks</h3>
      <strong>
        <em>The null value is not loosely equal to any of the other falsy values</em>
      </strong>{" "}
      except undefined and null itself .
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
      <h3>Nullish coalescing operator (??)</h3>
      <Code>
        {`if (value) console.log("Run if true. Check before making operations that would crash runing values like undefined. For example .toUppercase()")
        if (!value) console.log("Run if false (for cause gards etc with early exit)")
        `}
      </Code>
      <h3>Nullish coalescing operator (??)</h3>
      <h3>
        När går en default in i ett argument? function hej (price = 0) //Vilket värde
        overridar default 0?
        <Code>
          {`const validate = (toValidate = "MJAU") => {
    // Sets toValidate parameter to MJAU ONLY in the argument is undefined.
    console.log("tovalidate: ", toValidate)}`}
        </Code>
      </h3>
    </>
  )
}

export { NullChecks }

// . The trap of null
// null might appear, often unexpectedly, in situations when you expect an object. Then if you try to extract a property from null, JavaScript throws an error.

// Let’s use again greetObject() function and try to access message property from the returned object:

// let who = '';
// greetObject(who).message;
// // throws "TypeError: greetObject() is null"
// Because who variable is an empty string, the function returns null. When accessing message property from null, a TypeError error is thrown.

// You can handle null by either using the optional chaining with nullish coalescing:

// let who = '';
// greetObject(who)?.message ?? 'Hello, Stranger!';
// // => 'Hello, Stranger!'
// or use 2 alternatives described in the next section.
