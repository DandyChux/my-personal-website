import React, { useState } from 'react';
import { Navbar } from '@modules/navbar/components/Navbar';

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = (props: Props) => {
    const [navActive, setNavActive] = useState(true);

    return (
        <>
            <Navbar />
            {props.children}
            {/* Maybe add a footer? */}
        </>
    );
}