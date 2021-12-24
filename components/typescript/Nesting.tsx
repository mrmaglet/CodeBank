import React from "react"

///////////////////////////////////////////////////////////////////
interface Person {
  name: string
  age: number
}

interface Table {
  list: Person[]
  amount: number
}

const DataExample: Table = {
  amount: 3,
  list: [
    {
      name: "Magnus",
      age: 41,
    },
    {
      name: "Olle",
      age: 7,
    },
  ],
}

console.log(DataExample.amount)
console.log(DataExample.list[1].name)

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

interface Person1 {
  name: string
  age: number
}

interface Objects<T> {
  list: T[]
  amount: number
}

// const a: Paginated<Recipient>
// a.content.bankCode
// a.paginationMetaDat.current

const DataExample2: Objects<Person1> = {
  amount: 3,
  list: [
    {
      name: "Magnus",
      age: 41,
    },
    {
      name: "Olle",
      age: 7,
    },
  ],
}

console.log(DataExample2.amount)
console.log(DataExample2.list[0].name)

const SCOPE = (data: Person1[]) => {
  console.log(data[0].name)
}

SCOPE(DataExample2.list)

const result = DataExample2.list.map((element) => {
  console.log(element.age + 100)
})
console.log(result)

////////////////////////////////////////////////////

////////////////////////////////////////////////////

interface Item {
  id: number
  size: number
}
interface Example {
  name: string
  items: {
    [key: string]: Item
  }
}

var obj: Example = {
  name: "test",
  items: {
    a: {
      id: 1,
      size: 10,
    },
    b: {
      id: 2,
      size: 34,
    },
  },
}

console.log(obj.name)
console.log(obj.items.b.size)

////////////////////////////////////////////////////

const Nesting = () => {
  //

  return <></>
}

export { Nesting }
