import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
const Navbar = () => {
    const items = useSelector((state) => state.Cart)

    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <span>Redux Toolkit Study</span>
            <div>
                <Link to={"/"} className='navLink' style={{fontWeight:"bolder"}}>Home</Link>
                <Link to={"/cart"} className='navLink' style={{fontWeight:"bolder", marginLeft:"30px"}}>Cart</Link>
                <span style={{fontWeight:"bolder", marginRight:"50px"}}>- Items : {items.length} </span>
            </div>
        </div>
    )
}

export default Navbar
