import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <Link exact to="/uno" className="nav-logo">
             UNGM
              
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/population"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Population
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/science"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/climate"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Climate
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/take_action"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                 Take action 
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i  > {click ? <FaTimes /> : <FaBars/>}</i>

            </div>
          </div>
        </nav>
      </ div>
    );
  }

  export default NavBar