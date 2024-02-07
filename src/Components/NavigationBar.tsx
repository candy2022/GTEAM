import React , {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import "../Styles/NavigationBarstyle.css";
import Googlebtn from "./Googlebtn";
interface MenuItem {
  name: string;
  link: string;
}

interface NavigationBarProps {
  menuItems: MenuItem[];
   
}
 
function NavigationBar({ menuItems }: NavigationBarProps) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isLoggedIn = !!sessionStorage.getItem('name'); // name이 존재하면 true, 없으면 false
    const redirectPath = isLoggedIn ? '/dashboard' : '/';

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };
     
   
    useEffect(() => {
      const closeMenuOnOutsideClick = (event: MouseEvent) => {
        if (
          isMobileMenuOpen &&
          !((event.target as HTMLElement).closest('.nav-items') || (event.target as HTMLElement).closest('.mobile-menu-icon'))
          ) {
          closeMobileMenu();
        }
      };
  
         window.addEventListener('click', closeMenuOnOutsideClick);
      
      return () => {
        window.removeEventListener('click', closeMenuOnOutsideClick);
      };
    }, [isMobileMenuOpen]);
  
    return (
      <header>
          
        <a className="logo" href={redirectPath}>          
          <img src="https://avatars.githubusercontent.com/u/155896979?s=200&v=4" alt="logoimg" />
        </a>  
        <nav>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
  
          <ul className={`nav-items ${isMobileMenuOpen ? 'show' : ''}`}>
            {menuItems.map((menuItem, index) => (
              <li key={index}> 
                {menuItem.link.startsWith('/') ? (
                  <Link to={menuItem.link} onClick={closeMobileMenu}>
                    {menuItem.name}
                  </Link>
                ) : (
                  <a href={menuItem.link} onClick={closeMobileMenu}>
                    {menuItem.name}
                  </a>
                )}                
              </li>
               ))}
              <Googlebtn />
          </ul>
        </nav>
      </header>
    );
  }
  
  export default NavigationBar;
  