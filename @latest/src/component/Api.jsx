import { useEffect, useState } from "react"

const Api = () => {

    const [data,setData] = useState()



    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    // },[])

    useEffect(()=>{

        (async ()=> {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            let json = await response.json()
            setData(json)
        })()

    },[])

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Api

