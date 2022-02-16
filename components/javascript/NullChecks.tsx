import React from "react"
import { Code } from "../common/Code"
import { Mark } from "../layout/Mark"

const NullChecks = () => {
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
        <em>
          The null (or undefined) value is not loosely equal to any of the other falsy
          values
        </em>
      </strong>{" "}
      except undefined and null itself.
      <Code>{`if (price == null) console.log("Price is either null or undefined (nullish)")
      if (price == undefined) console.log("Price is either null or undefined (nullish)")`}</Code>
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
      <p>Try to avoid returning null in favor of:</p>
      <ul>
        <li>returning a default object instead of null</li>
        <li>throwing an error instead of returning null</li>
      </ul>
      <h2>Conditional (ternary) operator</h2>
      <p>
        Ternary means threesome and takes three operands. This operator is frequently used
        as a shortcut for the if statement.
      </p>
      <p>Compare truthy and falsly values.</p>
      <Code raw trim>
        {`$price ? \`{$price kr}\` : "Free"  
          $active ? "active-class" : ""  `}
      </Code>
      <h2>Short-circuit evaluation</h2>
      <ul>
        <li>Logical expressions are evaluated left to right.</li>
        <li>This compares with truthy and falsely</li>
      </ul>
      <Code raw trim>
        {`price && <Amount>{price}</Amount> 
        // The same as: 
        if (price) bli blo bla

        arr.length && doSomething(arr) 
        // The same as: 
        if (arr.length) doSomething(arr)`}
      </Code>
      <p>And the or sign checks for falsy</p>
      <Code raw trim>
        {`name || <Form>Please enter your missing name</Form>
        // The same as: if (!name) <Form> ... 
        
        const name = res.name || "No name found" 
        // The same as: if (!res.name) name = "No name found"`}
      </Code>
      <h2>Nullish coalescing operator (??)</h2>
      {
        <p>
          {`The new Nullish coalescing operator (??) works like ||, but it only returns the
        second expression, when the first one is "nullish", i.e. null or undefined.`}
        </p>
      }
      <p>
        {`It is thus the better alternative to provide defaults, when values like "" or 0
        are valid values for the first expression, too.`}
      </p>
      <Code raw trim>
        {`price ?? console.log("Price")<Amount<Form>Please enter your missing name</Form>
        // The same as: if (!name) <Form> ... 
        
        const name = res.name || "No name found" 
        // The same as: if (!res.name) name = "No name found"`}
      </Code>
      <h2>Optional chaining (?.)</h2>
      <p>
        The optional chaining operator (?.) enables you to read the value of a property
        located deep within a chain of connected objects without having to check that each
        reference in the chain is valid.
      </p>
      <p>
        The ?. operator is like the . chaining operator, except that instead of causing an
        error if a reference is <Mark>nullish</Mark> (null or undefined), the expression
        short-circuits with a <Mark>return</Mark> value of undefined. When used with
        function calls, it <Mark>returns</Mark>
        undefined if the given function does not exist.
      </p>
      <Code>
        {`const adventurer = {
          name: "Alice",
          cat: {
            name: "Dinah"
          }
        }

        const dogName = adventurer.dog?.name
        console.log(dogName);
        // expected output: undefined

        // Note: The above is the same as: adventure.dog && adventure.dog.name

        console.log(adventurer.someNonExistentMethod?.());
        // expected output: undefined
        `}
      </Code>
      <h3>Dealing with optional callbacks or event handlers</h3>
      <p>
        If you use callbacks or fetch methods from an object with a destructuring
        assignment, you may have non-existent values that you cannot call as functions
        unless you have tested their existence. Using ?., you can avoid this extra test:
      </p>
      <Code>{`catch (err) {
          if (onError) { // Testing if onError really exists
            onError(err.message);
          }
        }

        // Width optional chaining:
        catch (err) {
          onError?.(err.message); // no exception if onError is undefined
  }`}</Code>
      <h3>Combining with the nullish coalescing operator</h3>
      <p>
        The nullish coalescing operator may be used after optional chaining in order to
        build a default value when none was found:
      </p>
      <Code>{`let customer = {
          name: "Carl",
          details: { age: 82 }
        };
        const customerCity = customer?.city ?? "Unknown city";
        console.log(customerCity); // Unknown city`}</Code>
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
      <h3>Default arguments neither nullish or falsy</h3>
      Missing arguments are only replaced with default values in the case of{" "}
      <Mark>undefined.</Mark>
      <Code>
        {`const validate = (toValidate = "MJAU") => {
        // Sets toValidate parameter to MJAU ONLY in the argument is undefined.
        console.log("tovalidate: ", toValidate)}`}
      </Code>
      <br />
      <br />
    </>
  )
}

export { NullChecks }
