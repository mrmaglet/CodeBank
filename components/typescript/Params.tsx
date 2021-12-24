import React from "react"

interface Parameters {
  sortBy: string
  page: string
}

function Params({ ...p }: Parameters) {
  //const params = { sortBy, page }

  console.log("arg: ", arguments)
  let params = {}

  for (let i = 0; i < arguments.length; i++) params

  console.log(params)
}

export { Params }
