import React from "react"

interface Car {
  brand: string
  model: string
  tech: any
}

const Functions = () => {
  const car1 = {
    brand: "Toyota",
    model: "Corolla",
    tech: {
      wheels: 4,
    },
  }

  const combineCar = (car: Car) => {
    // return car.brand + car.model
    return JSON.stringify(car)
  }

  console.log("Functions:", car1)

  return <>function CombineCar: {combineCar(car1)}</>
}

export { Functions }
