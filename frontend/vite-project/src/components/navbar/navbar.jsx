import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";

export function Navbar(props){
    
    console.log(localStorage.getItem("username"))
    return(
        <>
         <div class="navbar">
        <div class="logo">
        <h4>SMART</h4>
        <h3>DONATION</h3>
         </div>
         <div class="logo2">
            <p>Donation for</p>
            <div class="add-icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
            <p>NATION</p>
            </div>
         </div>
        <div class="searchbar">
            <select class="search-select">
                <option>All</option>
             </select>
             <input type="text" placeholder="Search Donation" class="search-input"/>
            <div class="search-icon"><i class="fa-solid fa-magnifying-glass"></i> </div>

        </div>
        <div class="profile">
          <div class="Profilelogo"> 
          <div class="circle"></div>
            <i class="fa-solid fa-user"></i></div>
          <div class="profilesignin">
            <NavLink to={"/login"}  > {localStorage.getItem("username")?<p style={{fontSize:"1rem"}}>{localStorage.getItem("username")}</p>:<p style={{fontSize:"1rem"}}>join us</p>}</NavLink>
            </div>
        </div>
    </div>
        </>
    )
}