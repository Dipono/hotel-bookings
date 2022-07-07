
import { NavLink } from 'react-router-dom'

import header from './Header.module.css';
function Header() {

    return (
        <div className={header.main}>
            <div className={header.navBar}>
                <ul className={header.nav}>
                    <li><NavLink to={'/'} className={header.isActive} >Home</NavLink></li>
                    <li><NavLink to={'/about'} className={header.isActive}>About</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Services</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Destination</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Blog</NavLink></li>
                    <li><NavLink to={'#'} className={header.isActive}>Contact</NavLink></li>
                    <li><input type="text" className={header.searchBtn} /></li>
                </ul>
                <label className={header.username}>Username</label>
                <label className={header.logout}>Logout</label>

            </div>

        </div>
    )
}

export default Header;

/*
className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
*/