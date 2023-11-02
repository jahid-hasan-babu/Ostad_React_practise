import { useState } from "react"


const App = () => {

  let [fromObj, setFormObj] = useState({
    fName:"",
    lName:"",
    city:"",
    gender:""
  })


  const inputOnChange = (property, value) =>{
      setFormObj(prevObj=>({
        ...prevObj,
        [property]:value,
        

      }))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(fromObj);
    alert(JSON.stringify(fromObj))
  }

  return (
    <>
      <div className="container">
        <h1>Submit your From</h1>
        <form>
          <input onChange={(e)=>{inputOnChange("fName",e.target.value)}} value={fromObj.fName} placeholder="First name" /> <br />
          <input onChange={(e)=>{inputOnChange("lName",e.target.value)}} value={fromObj.lName} placeholder="Last Name" /> <br />
          <select onChange={(e)=>{inputOnChange("city",e.target.value)}} value={fromObj.city}>

            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Cumilla">Cumilla</option>
          </select>
          <br />
          <input onChange={()=>{inputOnChange("gender",'Male')}} checked={fromObj.gender === "Male"} type="radio" name="gender"/>Male
          <input onChange={()=>{inputOnChange("gender",'Female')}} checked={fromObj.gender === "Female"} type="radio" name="gender"/>Female
          <br />
          <button onClick={formSubmit} type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
