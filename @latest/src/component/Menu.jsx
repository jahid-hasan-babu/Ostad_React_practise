import {NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <div>
      <ul>
        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive,isPending})=>isActive?"active-item":"pending-item"} to="/About">About</NavLink></li>
        <li><NavLink className={({isActive,isPending})=>isActive?"active-item":"pending-item"} to="/Contact">Contact</NavLink></li>

      </ul>
    </div>
  )
}

export default Menu
