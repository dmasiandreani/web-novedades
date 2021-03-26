import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import './styles.css'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiIcons.BiHomeAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Tabla Contratos',
        path: '/Contratos',
        icon: <BsIcons.BsTable/>,
        cName: 'nav-text'
    },
    {
        title: 'Tabla Novedades',
        path: '/Novedades',
        icon: <BsIcons.BsTable/>,
        cName: 'nav-text'
    },
]
