import { useState } from "react"

const StateObj = () => {
    const [myObj, setMyObj] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3"
     })

     const updateObj = () =>{
        setMyObj(
            prevObj =>(
                {
                    ...prevObj,
                    key1: "Jahid"
                }
            )
        )
     }
    return (
        <div>
            <h1>{myObj.key1}</h1>
            <button onClick={updateObj}>Click</button>
        </div>
    )
}

export default StateObj
