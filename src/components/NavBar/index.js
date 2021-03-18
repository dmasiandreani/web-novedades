import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './styles.css'
import	{IconContext} from 'react-icons'

export default function NavBar() {
    const [sideBarState, setSideBarState] = useState(false);
    return (
        <IconContext.Provider value={{color : 'Black'}}>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={() => (setSideBarState(!sideBarState))} />
                </Link>
            </div>
            <nav className={sideBarState ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-item' onClick={() => (setSideBarState(!sideBarState))}>
                    <li className='navbar-toggle'>
                        <Link to='#' className="menu-bars">
                            <AiIcons.AiOutlineClose className="icon"/>
                        </Link>
                    </li>
                    {SidebarData?.map((menuItem, index) => {
                        return (
                            <li key={index} className={menuItem.cName}>
                                <Link to={menuItem.path}>
                                    {menuItem.icon}
                                    <span>{menuItem.title}</span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </nav>
        </IconContext.Provider>
    );
}
