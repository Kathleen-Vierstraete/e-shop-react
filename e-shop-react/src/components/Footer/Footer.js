import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
  
            <footer className='footer'>
                <ul className="footer-list">
                    <li className="footer-item">
                      <NavLink to="#" className="footer-link">Contact us</NavLink>
                    </li>
                    <li className="footer-item">
                      <NavLink to="#" className="footer-link">Legal Notice</NavLink>
                    </li>
                    <li className="footer-item">
                      <NavLink to="#" className="footer-link">FAQ</NavLink>
                    </li>
                </ul>
                <p className='footer-sentence'>A Different Kind Of Company. A Different Kind Of Ecommerce.</p>
            </footer>
            
    )
}

export default Footer;