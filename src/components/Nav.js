import React from 'react'
import {Link, useNavigate} from "react-router-dom";


export default function Nav() {
    let navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='navDiv'>
                <h4 onClick={()=>{navigate("/")}}>Weather</h4>
            </div>
            <div className='navDiv'>
                <h4 onClick={()=>{navigate("/News")}}>News</h4>
            </div>
            <div className='navDiv'>
                <h4 onClick={()=>{navigate("/Science")}}>Science</h4>
            </div>
            <div className='navDiv'>
                <h4 onClick={()=>{navigate("/Sports")}}>Sports</h4>
            </div>
        </div>
    )
}
