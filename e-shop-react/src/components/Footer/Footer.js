// import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
  
            <footer className='bg-indigo-400 text-black shadow-lg'>
              <div className="container mx-auto flex items-center h-24">
                <ul className="font-semibold lg:text-lg w-full flex justify-between mx-3">
                    <li className="footer-item">
                      <NavLink to="#" className="hover:shadow-lg">Contact us</NavLink>
                    </li>
                    <li className="footer-item">
                      <NavLink to="#" className="hover:shadow-lg">Legal Notice</NavLink>
                    </li>
                    <li className="footer-item">
                      <NavLink to="#" className="hover:shadow-lg">FAQ</NavLink>
                    </li>
                </ul>
                </div>
                <p className='footer-sentence'>A Different Kind Of Company. A Different Kind Of Ecommerce.</p>
            </footer>
            
    )
}

export default Footer;