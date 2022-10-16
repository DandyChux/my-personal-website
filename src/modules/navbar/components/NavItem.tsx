import * as React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

export interface INavItem {
    text: string;
    href: string;
    active: boolean;
    icon: IconType;
}

export const NavItem: React.FC<INavItem> = ({ text, href, active, icon }) => {
    return (
        <Link href={href} key={text}>
            <a className={`${active ? 'active' : ''}`}>
                <>{icon}</>
            </a>
        </Link>
    );
};

