import { BrowserRouter, Route, Routes } from "react-router-dom"
import Api from "./component/Api"
import Person from "./component/Person"
import StateObj from "./component/StateObj"
import Home from "./component/pages/Home"
import About from "./component/pages/About"
import Contact from "./component/pages/Contact"
import NotFound from "./component/pages/NotFound"

const App = () => {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    
    </BrowserRouter>
     <Person/>
     <StateObj/>
     <Api/>
    </>
  )
}

export default App
