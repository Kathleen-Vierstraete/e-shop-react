import React from 'react';
import eshopLogo from '../../assets/img/eshop-logo.png';
import './Header.css';



function Header() {
    return (
  
            <header className='header'>
                <img src={eshopLogo} alt='eshop-logo' className='logo-image'/>
                <p className='p-header'>Welcome to our e-shop</p>
            </header>
    )
}

export default Header;