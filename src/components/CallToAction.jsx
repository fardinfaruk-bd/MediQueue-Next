import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <div>
            <section className="bg-[#DBE1FF] py-20">
                <div className=" text-center">
                    <h2 className="text-2xl md:text-5xl text-black font-bold mb-6 ">
                        Ready to excel in your studies?
                    </h2>
                    <p className="text-lg font-light mb-10 text-black opacity-60 max-w-2xl mx-auto">
                        Take the first step toward academic mastery with a tutor who understands your goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={"/all-tutors"}><Button className="bg-blue-500 text-white px-10 py-8 rounded-lg font-bold shadow-xl hover:opacity-90 active:scale-95 animate-pulse animation-duration-5000 transition-all">
                            Get Started Now
                        </Button></Link>
                        <Link href="/my-tutors"><Button variant="outline" className=" border border-blue-500 text-blue-500 px-10 py-8 rounded-lg font-bold  hover:bg-blue-300 hover:text-white hover:border-blue-300 active:scale-95 transition-all">
                            Browse Your Tutor
                        </Button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallToAction;