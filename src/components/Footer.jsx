import Image from 'next/image';
import React from 'react';
import LogoImage from "../../public/assets/logo.png"
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="bg-blue-500 w-full text-white">
            
                <div className="w-[80%] md:w-[90%] lg:w-[85%] mx-auto space-y-7 pt-30">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mx-auto mb-20">
                        <div className="space-y-5">
                            <div className='bg-white flex  sm:justify-center items-center'>
                                <Image src={LogoImage} alt="logo" width={150} height={150} />
                            </div>
                            <p className="text-[#ffffffb3] font-normal text-left md:text-center">ALl The Best Tutors Are Here, Its your Choice To Choose The Right One</p>
                        </div>


                        <div className="space-y-4">
                            <h1 className="text-xl ">Company</h1>
                            <ol className="text-[#ffffffb3] space-y-4">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Work</li>
                                <li>Press</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Resources</h1>
                            <ol className="text-[#ffffffb3] space-y-4">
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Social Links</h1>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaInstagram className="text-black" />
                                </div>
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaFacebook className="text-black" />
                                </div>
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaXTwitter className="text-black" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="border border-gray-100 opacity-65" />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pb-8 text-center md:text-left">

                        <p className="text-[#ffffffb3]">
                            © 2026 MediQueue. All rights reserved.
                        </p>

                        <div className="flex  md:flex-row items-center gap-4 md:gap-8 text-[#ffffffb3] mt-3 md:mt-0">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>

                    </div>
                </div>
           
        </div>
    );
};

export default Footer;