"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@heroui/react';
import { ArrowRight } from '@gravity-ui/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <div className="relative w-full h-150 md:h-180 bg-primary overflow-hidden hero-swiper-section">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                

                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image
                            src="https://i.ibb.co.com/yn3pPW8V/a-professional-high-quality-photograph-of-a-diverse-student-and-a-friendly.png"
                            alt="Student and tutor collaborating"
                            fill
                            className="absolute inset-0 w-full h-full object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0B1C30E6] via-[#0B1C3066] to-transparent flex items-center">
                            <div className="max-w-[90%] mx-auto w-full flex flex-col gap-6 justify-center md:justify-start text-center md:text-left ">
                                <div className="max-w-[80%] md:max-w-2xl mx-auto md:mx-0 space-y-10">
                                    <h1 className="font-bold text-4xl  md:text-6xl lg:text-7xl  text-white">
                                        Personalized Learning for Every Student
                                    </h1>
                                    <p className=" text-white opacity-80">
                                        Match with the perfect tutor tailored to your unique learning style.
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <Link href="/tutors"><Button className={"text-white font-semibold py-6 rounded-lg flex items-center gap-2"}>Find Your Tutor <ArrowRight /></Button></Link>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image
                            src="https://i.ibb.co.com/cKr9rXJ7/a-professional-close-up-of-a-tutor-or-expert-explaining-a-complex-concept-on-a.png"
                            alt="Expert tutor teaching complex concepts"
                            fill
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0B1C30E6] via-[#0B1C3066] to-transparent flex items-center">
                            <div className="max-w-[90%] mx-auto w-full flex flex-col gap-6 justify-center md:justify-start text-center md:text-left">
                                <div className="max-w-[80%] md:max-w-2xl mx-auto md:mx-0 space-y-10">
                                    <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl  text-white">
                                        Expert Guidance from Certified Tutors
                                    </h1>
                                    <p className=" text-white opacity-80">
                                        Master complex subjects with help from industry-leading experts.
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <Link href="/all-tutors"><Button className={"text-white font-semibold py-6 rounded-lg flex items-center gap-2"}>Find Your Tutor <ArrowRight /></Button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <Image
                            src="https://i.ibb.co.com/7xz9vB0w/a-modern-lifestyle-photograph-of-a-student-comfortably-learning-at-home-with-a.png"
                            alt="Flexible learning at home"
                            fill
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#0B1C30E6] via-[#0B1C3066] to-transparent flex items-center">
                            <div className="max-w-[90%] mx-auto w-full flex flex-col gap-6 justify-center md:justify-start text-center md:text-left">
                                <div className="max-w-[80%] md:max-w-2xl mx-auto md:mx-0 space-y-10">
                                    <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl  text-white">
                                        Flexible Scheduling to Fit Your Life
                                    </h1>
                                    <p className="text-white  opacity-80">
                                        Book sessions that work for you, anytime and anywhere.
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <Link href="/tutors"><Button className={"text-white font-semibold py-6 rounded-lg flex items-center gap-2"}>Find Your Tutor <ArrowRight /></Button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;