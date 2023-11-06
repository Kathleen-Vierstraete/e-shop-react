import React from 'react';
import eshopLogo from '../../assets/img/eshop-logo.png';
// import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";



function Header() {
    return (
  
            <header className='bg-violet-400 text-white shadow-lg'>
                <div className="container mx-auto flex items-center h-44">
                    <Link to='/'>
                        <img src={eshopLogo} alt="eshop-logo" className="logo-image ml-2.5" />
                    </Link>
                <p className='text-black text-xl font-medium ml-3'>Welcome to our e-shop</p>

  
                < Navbar /> 
        
                </div>
            </header>

            
            
    )
}

export default Header;

