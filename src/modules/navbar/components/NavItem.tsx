import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import { FaIcons } from 'react-icons/fa';

export interface INavItem {
    text: string;
    href: string;
    active: boolean;
    icon: IconType;
}

export const NavItem: React.FC<INavItem> = ({ text, href, active, icon }) => {
    const router = useRouter();
    const Icon = icon;

    return (
        <Link href={href} key={text} passHref>
            <a className={`${active ? 'active' : ''}`}>
                <Icon/>
            </a>
        </Link>
    );
};

