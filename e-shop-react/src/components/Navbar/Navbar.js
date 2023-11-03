import { NavLink } from 'react-router-dom';
import { useState } from "react";


// import './Navbar.css';



function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

    return (

      <div className='font-semibold lg:text-lg w-full flex justify-end'>
      <div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8">
              <NavLink to="/" className="link">Homepage</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8">
              <NavLink to="/signup" className="link">Sign up page</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8">
              <NavLink to="/login" className="link">Login page</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
          <NavLink to="/" className="link">Homepage</NavLink>
          </li>
          <li>
          <NavLink to="/signup" className="link">Sign up page</NavLink>
          </li>
          <li>
          <NavLink to="/login" className="link">Login page</NavLink>
          </li>
        </ul>
      </nav>
      
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: #a78bfa;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </div>

    )
}

export default Navbar;

// link https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js:138-2729


{/* <div className='font-semibold lg:text-lg w-full flex justify-end'>
<div>
  <ul className="mx-auto flex items-end">

    <li className="p-5 xl:p-8 active ">
        <NavLink to="/" className="link">Homepage</NavLink>
    </li>

      <li className="p-5 xl:p-8 active">
      <NavLink to="/signup" className="link">Sign up page</NavLink>
    </li>
    <li className="p-5 xl:p-8 active">
      <NavLink to="/login" className="link">Login page</NavLink>
    </li>
  </ul>

  </div>
  </div> */}