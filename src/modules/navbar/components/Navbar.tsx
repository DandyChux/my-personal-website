import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@public/logo.png';
import { INavItem, NavItem } from './NavItem';
import { IconType } from 'react-icons/lib';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsMailbox, BsChatSquareText } from 'react-icons/bs';

export const Navbar: React.FC = () => {
    const menu_links: { text:string; href:string; icon:IconType }[] = [
        { text: "Home", href: "/", icon: FaHome },
        { text: "About Me", href: "/about", icon: FaUser },
        { text: "Blog", href: "/blog", icon: BsChatSquareText },
        { text: "Contact", href: "/contact", icon: BsMailbox }
    ];

    return (
        <nav className="absolute h-full md:h-screen md:w-32 flex flex-col justify-center bg-gray-900">
            <div className="absolute top-0 mt-2.5"> 
                <Image src={Logo} alt="My logo" />
            </div>
            <div className="flex flex-col justify-center">
                {menu_links.map((link) => (
                    <div key={link.text} className="w-full flex justify-center">
                        <NavItem {...link} />
                    </div>
                ))}
            </div>
        </nav>
    )
}