import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from "react-icons/md";

export const SidebarData=[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Animes',
        path: '/Animes',
        icon: <AiIcons.AiFillAmazonCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Books',
        path: '/Books',
        icon: <IoIcons.IoBookSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'Mangas',
        path: '/Mangas',
        icon: <IoIcons.IoBookSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'Movies',
        path: '/Movies',
        icon: <MdIcons.MdLocalMovies/>,
        cName: 'nav-text'
    },
    {
        title: 'Novels',
        path: '/Novels',
        icon: <IoIcons.IoBookSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'Novel',
        path: '/Novel',
        icon: <IoIcons.IoBookSharp/>,
        cName: 'nav-text'
    },          
    {
        title: 'Series',
        path: '/Series',
        icon: <MdIcons.MdLocalMovies/>,
        cName: 'nav-text'
    }    
]