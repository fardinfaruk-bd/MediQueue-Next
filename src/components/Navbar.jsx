import Image from 'next/image';
import React from 'react';
import logo from "../../public/assets/logo.png";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                    </ul>
                </div>
                <div>
                    <Image src={logo} alt="Logo" width={150} height={100} />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tutors">Tutors</Link></li>
                    <li><Link href="/add-tutor">Add Tutors</Link></li>
                    <li><Link href="/my-tutors">My Tutors</Link></li>
                    <li><Link href="/booked-sessions">Booked Sessions</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 ">
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;