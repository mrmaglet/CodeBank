import React from "react"
import { Code } from "../Code"
import { Container } from "../layout/Container"

const doSomething = (val: any) => {
  console.log("VAL: ", val)
}

const nonEmptyobj = { name: "Bar" }
if (Object.keys(nonEmptyobj).length) console.log("I have at least one obj key")

const value: any = { shit: "undefined" }

value.length && doSomething(value)
console.log("LEngth: ", value.length)

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

  const emptyArr: any = []
  if (emptyArr) {
    console.log("My empty arr is truthy")
    // emptyArr[0].toUpperCase()
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
      <h3>Checks and cause gards</h3>
      Common pattern to check for empty value before making any operations on a variable
      like toUppercase().
      <Code>
        {`if (value) {
          // Run if truthy. 
          // Check before making operations that would crash runing values like undefined. 
          // Be aware that truthy values like empty arrays and objects are concidered true {} []
        }
        if (!value) {
          // Run if falsy (for cause gards etc with early exit - one line return
          // Be aware that falsy values "", 0 etc is concidered false. 
          }  `}
      </Code>
      <h3>Null checks</h3>
      <strong>
        <em>The null value is not loosely equal to any of the other falsy values</em>
      </strong>{" "}
      except undefined and null itself.
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
      <h2>Not dealing with null</h2>
      <p>I try to avoid returning null in favor of:</p>
      <ul>
        <li>returning a default object instead of null</li>
        <li>throwing an error instead of returning null</li>
      </ul>
      <h3>Nullish coalescing operator (??)</h3>
      <h2>Conditional (ternary) operator</h2>
      Ternary means threesome and takes three operands. Compare truthy and falsly values.
      This operator is frequently used as a shortcut for the if statement.
      <h2>Short-circuit evaluation</h2>
      <ul>
        <li>Logical expressions are evaluated left to right.</li>
        <li>Compare with truthy and falsely</li>
      </ul>
      <Code raw trim>
        {`
             price && Amount>{price} kr</Amount>
             value.length > 0 && doSomething(value)
             
            `}
      </Code>
      <h2>Check arrays</h2>
      <p>
        A good way to check an array is empty or not is with length. As long as an array
        has any elements it concidered a length - even if the value itself is undefined.
      </p>
      <p>Remember that an empty array [] is truthy. </p>
      <Code>
        {`
          const arr = [undefined]
          console.log(arr.length) // 1 (truthy) 
        `}
      </Code>
      <h2>Check for empty object</h2>
      <p>An object has no length property. Instead count the key. IE9 and above. </p>
      <Code>
        {`const obj = {name: "Foo"}
  if (Object.keys(obj).length) console.log("I have at least one property")`}
      </Code>
      <p>
        If we stringify the object and the result is simply an opening and closing
        bracket, we know the object is empty.
      </p>
      <Code>
        {`
        function isEmptyObject(obj){
            return JSON.stringify(obj) === '{}';
        }`}
      </Code>
      <p>Using Underscore and Lodash</p>
      <Code>
        {`
        _.isEmpty(obj)`}
      </Code>
      <h3>Nullish coalescing operator (??)</h3>
      <h3>
        När går en default in i ett argument? function hej (price = 0) //Vilket värde
        overridar default 0?
      </h3>
      <Code>
        {`const validate = (toValidate = "MJAU") => {
    // Sets toValidate parameter to MJAU ONLY in the argument is undefined.
    console.log("tovalidate: ", toValidate)}`}
      </Code>
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
