import { Fragment, useState } from "react";
import "./Todo.css"


const Todo = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("")
    const AddToList = ()=>{
        list.push(item)
        setList([...list])
    }


    const removeItem = (index) =>{
        list.splice(index,1)
        setList([...list])
    }
    return (
        <Fragment>
            <h1>TODO LIST</h1>
       <table>
            <tbody>
                {
                    list.length!==0?(
                        list.map((element,index)=>{
                            return(
                                <tr>
                                    <td className="tditem">{element}</td>
                                    <td>
                                        <button onClick={()=>{
                                        removeItem(index)
                                    }}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    ):(<tr></tr>)
                }
            </tbody>
       </table>
        <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder="Put your Item"/>
        <button onClick={AddToList}>Add</button>
        </Fragment>
    )
}

export default Todo
