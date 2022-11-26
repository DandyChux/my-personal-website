import React, { useState } from 'react';
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
    const [isShown, setIsShown] = useState(false);
    const router = useRouter();
    const Icon = icon;

    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <IconContext.Provider value={{ style: { padding: '10px' } }}>
            <Link href={href} key={text} onClick={handleClick} className="cursor-pointer relative w-full flex justify-center" passHref>
                {isShown && (
                    <div className="absolute text-red-550">
                        {text}
                    </div>
                )}
                <Icon size="3rem" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className={`hover:opacity-0 hover:ease-in duration-1500 ${router.pathname === href ? 'text-red-300' : 'text-red-550 hover:text-white '}`} />
            </Link>
        </IconContext.Provider>
    );
};

