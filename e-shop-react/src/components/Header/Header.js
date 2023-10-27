import React from 'react';
import eshopLogo from '../../assets/img/eshop-logo.png';
import './Header.css';
import Navbar from '../Navbar/Navbar';



function Header() {
    return (
  
            <header className='header'>
                <img src={eshopLogo} alt='eshop-logo' className='logo-image'/>
                <p className='p-header'>Welcome to our e-shop</p>

                < Navbar /> 
            </header>

            
            
    )
}

export default Header;