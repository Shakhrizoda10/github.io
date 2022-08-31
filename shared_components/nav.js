import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <div  className="position" >
               <nav  className="flexul">
               
                    <Link className="navbar" to="/">Home</Link> 
                     <Link className="navbar" to="/population">World population</Link>
                     <Link className="navbar" to="/science">Science</Link>
                     <Link className="navbar" to="/climate">Climate</Link>
                    <Link className="navbar" to="/take_action">Take action</Link>
               
                 
      

                  
               </nav>
            </div>
     );
}
export default Navbar