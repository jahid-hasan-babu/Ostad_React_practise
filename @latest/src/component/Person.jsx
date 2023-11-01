import { useState } from "react"


const Person = () => {

  const [number,setNumber] = useState(0)
  const increment = () =>{
    setNumber(number + 1)
  }
  const reset = () =>{
    setNumber(0)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Click</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Person
