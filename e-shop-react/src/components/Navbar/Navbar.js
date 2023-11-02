import { NavLink } from 'react-router-dom';

import './Navbar.css';


function Navbar() {
    return (
      
      <div className='nav'>
        <ul className="list">
                    <li className="item">
                      <NavLink to="/signup" className="link">Sign up page</NavLink>
                    </li>
                    <li className="item">
                      <NavLink to="#" className="link">second link</NavLink>
                    </li>
                    <li className="item">
                      <NavLink to="#" className="link">third link</NavLink>
                    </li>
        </ul>
      </div>
    )
}

export default Navbar;