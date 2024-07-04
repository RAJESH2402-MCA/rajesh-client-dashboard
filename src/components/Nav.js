import React from 'react';
import { CiUser } from "react-icons/ci";
import { BsCalendar4Event } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

import './Nav.css';
const Nav = () => {
  return (
    <nav>
     <ul>
      
    
     <p style={{marginTop:-60, fontSize:20}}><b>Qatar Event Hub</b></p>
     <div className="container">
     <img src="https://th.bing.com/th/id/OIP.hnvkQKdtDKpzdvv6Dt2BegHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  height="40px" alt="AI"></img>
     <div style={{fontSize:10, width:120}}>
      <p><b>Isabella Singh</b></p>
     <p><a href="" target="_blank">isabellasingh@gmail.com</a></p>
      <li>Role - client</li>
  
      </div>
      </div>
    
      
      <p></p>
      <p></p>
      <p></p>
      

   <div className='details3'>
    <ol> <CiUser />    profile</ol>
    <p></p>
      <p></p>
    
    <ol> <BsCalendar4Event />     events</ol>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <ol> <CiSettings />    settings</ol>
    <p></p> <p></p>
    <p></p>
    <p></p>
    <ol>  <IoIosHelpCircleOutline />   Help and FaQs</ol>
    <p></p>
    <p></p> <p></p>
    <p></p>
   
    </div>
   

    
 
   
  
   
  
   

   

   
  
  </ul>
   
   <button style={{backgroundColor:'lightgreen',
    color:'white',marginTop:350, marginLeft:50
   }}> Sign Out</button>
    </nav>
  );
}

export default Nav;