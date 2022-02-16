import React from "react"

interface Person {
  name: string
  surename: string
  age: number
  sex?: sexType
}

type sexType = "Female" | "Male"

const Basic = () => {
  const person: Person = { name: "Olle", surename: "Brattwald", age: 5, sex: "Female" }

  console.log("Basic: ", person)

  return (
    <>
      {person.name} {person.surename} {person.age} {person.sex}
    </>
  )
}

export { Basic }
