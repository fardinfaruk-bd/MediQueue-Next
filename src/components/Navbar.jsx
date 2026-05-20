"use client"
import Image from 'next/image';
import React from 'react';
import logo from "../../public/assets/logo.png";
import Link from 'next/link';
import { Avatar, Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { ThemeSwitch } from './ThemeToggleButton';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data: session, isPending } =  authClient.useSession()
    const user = session?.user
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh();
    };
    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-tutors">Tutors</Link></li>
                        <li><Link href="/add-tutor">Add Tutors</Link></li>
                        <li><Link href="/my-tutors">My Tutors</Link></li>
                        <li><Link href="/booked-sessions">Booked Sessions</Link></li>
                    </ul>
                </div>

                <Link href="/">
                    <Image src={logo} alt="Logo" width={150} height={100} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/all-tutors">Tutors</Link></li>
                    <li><Link href="/add-tutor">Add Tutors</Link></li>
                    <li><Link href="/my-tutors">My Tutors</Link></li>
                    <li><Link href="/booked-sessions">Booked Sessions</Link></li>
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                <ThemeSwitch />
                <>
                    {isPending ? <span className="loading loading-spinner loading-xl"></span> :
                        user ? <>
                            <div className='flex items-center gap-2'>
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                                </Avatar>


                                <Button variant="danger" onClick={handleLogout}>Logout</Button>
                            </div>
                        </> : <>
                            <div className='flex gap-3'>
                                <Link href="/login">
                                    <Button>Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button variant='outline' className={"border-blue-500 text-blue-500"}>Register</Button>
                                </Link>
                            </div>
                        </>
                    }
                </>

            </div>
        </div>
    );
};

export default Navbar;