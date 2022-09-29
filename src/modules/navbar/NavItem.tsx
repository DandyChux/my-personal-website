import * as React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from 'react-icons/fa';
import { BsMailbox, BsChatSquareText } from 'react-icons/bs';

export const navItem = [
    {
        "label": "Home",
        "path": "/",
        "icon": <FaHome />
    },
    {
        "label": "About",
        "path": "/about",
        "icon": <FaUser />
    },
    {
        "label": "Contact",
        "path": "/contact",
        "icon": <BsMailbox />
    },
    {
        "label": "Blog",
        "path": "/blog",
        "icon": <BsChatSquareText />
    }
]