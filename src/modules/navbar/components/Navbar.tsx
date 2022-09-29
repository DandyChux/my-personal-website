import * as React from 'react';
import Link from 'next/link';
import { navItem } from '../NavItem';
import Image from 'next/image';
import Logo from '@public/logo.png';
// import { IconType } from 'react-icons';
import { FaHome, FaUser } from 'react-icons/fa';

type NavLink = {
    label: string;
    path: string;
    icon: JSX.Element;
}

const linksString = JSON.stringify(navItem);
const links = JSON.parse(linksString);

export const Navbar = () => (
    <nav className="relative h-full md:h-screen md:w-32 flex flex-col bg-gray-900">
        <div className="absolute top-0 mt-2.5"> 
            <Image 
                src={Logo}
                alt="My logo"
            />
            <span>Logo</span>
        </div>
        <div className="">
            {links.map((link: NavLink) => (
                <div key={link.label} className="w-min text-center no-underline">
                    <Link href={link.path}>
                        <a>
                            {link.icon}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    </nav>
)