import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import { FaIcons } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export interface INavItem {
    text: string;
    href: string;
    icon: IconType;
}

export const NavItem: React.FC<INavItem> = ({ text, href, icon }) => {
    const router = useRouter();
    const Icon = icon;

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <IconContext.Provider value={{ style: { padding: '10px' } }}>
            <Link href={href} key={text} onClick={handleClick} className="cursor-pointer" passHref>
                <Icon size="3rem" className={`${router.pathname === href ? 'text-red-300' : 'text-red-550 hover:text-white'}`} />
            </Link>
        </IconContext.Provider>
    );
};

