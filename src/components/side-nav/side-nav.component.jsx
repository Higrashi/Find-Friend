import React, {useState} from 'react';
import {Link} from "react-router-dom";


import "./side-nav.styles.css";

function SideNav () {

    const [navWidth, setNavWidth] = useState('0px');

    const handleClick = () => {

        navWidth === '0px' ? 
            setNavWidth('80%') :
            setNavWidth('0px')

    }
    
   
   const handleClose = () => {
       setNavWidth('0px')
   }
 

    return (
        <div className="side-header-container">

            
           
            <div className='side-header' style={{width: navWidth}}>
         
         
            <div className="side-close-container">
             <span className="close-header-btn" onClick={handleClose}>&times;</span>
          </div>
           
            <div className="side-header-links">
            
            
                <Link className='side-header-link' to='/' onClick={handleClose}>Home</Link>
                <Link className='side-header-link' to='/all' onClick={handleClose}>All</Link>
                <Link className='side-header-link' to='/cats-page' onClick={handleClose}>Cats</Link>
                <Link className='side-header-link' to='/dogs-page' onClick={handleClose}>Dogs</Link>
            </div>
           
            
            </div> 
   
                <div className="side-header-btn">
                        <span className='side-header-icon' onClick={handleClick}>&#9776;</span>
                </div>
        
       
          
        </div>
    )
}


export default SideNav;