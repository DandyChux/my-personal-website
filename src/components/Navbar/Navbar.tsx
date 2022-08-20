import * as React from 'react';
import Link from 'next/link';
import * as data from './links.json';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type NavLink = {
    label: string;
    path: string;
}

// const NavLink = ({ links }) => (
//     <div className="">
//         {links.map}
//     </div>
// )

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
                <div key={link.path} className="w-min text-center no-underline">
                    <Link href={link.path}>
                        <a>{link.label}</a>
                    </Link>
                </div>
            ))}
        </div>
    </nav>
)