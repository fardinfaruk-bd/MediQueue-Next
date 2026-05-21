"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathname = usePathname();
    
    const isActive = pathname === href;
    return (
        <Link href={href} className={`font-semibold ${isActive ? "rounded-none border-b-2 border-blue-500"  : "text-[#706F6F]"}`}>
            {children}
        </Link>
    );
};

export default NavLinks;