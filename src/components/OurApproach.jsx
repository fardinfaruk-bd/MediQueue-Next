import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoVerified } from 'react-icons/go';
import { LuBookOpenText } from 'react-icons/lu';

const OurApproach = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 bg-[#EEF0FF] rounded-xl p-10 flex flex-col justify-between">
                    <div>
                        <span className="text-blue-500 font-bold  uppercase  mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-3xl text-black font-bold mb-4 ">
                            Data-Driven Success Rates
                        </h2>
                        <p className="text-black opacity-60 max-w-xl">
                            We combine academic rigor with modern technology to provide a learning environment where 94% of students report grade improvements within 3 months.
                        </p>
                    </div>
                    <div className="mt-12 flex gap-12">
                        <div>
                            <div className="text-3xl font-semibold text-blue-500">
                                15k+
                            </div>
                            <div className="text-sm opacity-60">
                                Expert Tutors
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-semibold text-blue-500">
                                500k+
                            </div>
                            <div className="text-sm text-black opacity-60">
                                Lessons Completed
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 bg-blue-500 text-white rounded-xl p-10 flex flex-col justify-center text-center shadow-lg">
                    <div className="flex items-center justify-center text-5xl mb-6"><GoVerified /></div>
                    <h3 className="font-bold text-2xl mb-4">
                        Certified Quality
                    </h3>
                    <p className="text-white text-sm opacity-90 mb-8">
                        Every tutor on EduPro undergoes a rigorous 5-step background and expertise verification process.
                    </p>
                    <Link href="/all-tutors"><Button className="border-2 border-gray-300 w-full hover:border-blue-500 text-white py-3 rounded-lg font-bold transition-all">
                        View Our Verified Tutors</Button></Link>
                </div>
                <div className="md:col-span-4 bg-[#DBE1FF] rounded-xl p-10 border border-blue-200">
                    <div className=" text-blue-500 text-4xl mb-6">
                        <LuBookOpenText />
                    </div>
                    <h3 className="font-bold text-black text-2xl mb-2">
                        Personal Mentorship
                    </h3>
                    <p className="text-black opacity-60 text-sm">
                        Go beyond simple homework help with long-term academic mentorship.
                    </p>
                </div>
                <div className="md:col-span-8 relative rounded-xl overflow-hidden min-h-75">
                    <Image
                        src="https://i.ibb.co.com/rfy6fBTT/Students-studying-in-group-202605200312.jpg"
                        alt="Students studying together"
                        fill
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent flex items-end p-10">
                        <h3 className="text-xl text-white  relative z-10">
                            Join our growing community of 200,000+ learners.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;