import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <BiIcons.BiHomeAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Tabla Contratos',
        path: '/TablaContratos',
        icon: <BsIcons.BsTable/>,
        cName: 'nav-text'
    },
    {
        title: 'Tabla Novedades',
        path: '/TablaNovedades',
        icon: <BsIcons.BsTable/>,
        cName: 'nav-text'
    },
]