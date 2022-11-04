import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@public/logo.png';
import { INavItem, NavItem } from './NavItem';
import { IconType } from 'react-icons/lib';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsMailbox, BsChatSquareText } from 'react-icons/bs';

interface INavbar {
    navActive: boolean;
    setNavActive: (value: boolean) => void; 
}

// const linksString = JSON.stringify(navItem);
// const links = JSON.parse(linksString);

a
export const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {
    const [activeIdx, setActiveIdx] = useState(-1);
    
    const Menu_Links: { text:string; href:string; icon:IconType }[] = [
        { text: "Home", href: "/", icon: FaHome },
        { text: "About Me", href: "/about", icon: FaUser },
        { text: "Blog", href: "/blog", icon: BsChatSquareText },
        { text: "Contact", href: "/contact", icon: BsMailbox }
    ];

    return (
        <nav className="relative h-full md:h-screen md:w-32 flex flex-col bg-gray-900">
            <div className="absolute top-0 mt-2.5"> 
                <Image src={Logo} alt="My logo" />
            </div>
            {}
        </nav>
    )
}