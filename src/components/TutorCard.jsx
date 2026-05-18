import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const TutorCard = ({ tutor }) => {
    const [university, experience] = tutor.description.split(",") || [];
    const shortExp = experience?.replace("Years Experience", "Exp")?.replace("Experience", "Exp")?.trim();
    return (
        <Card className='p-0 border border-gray-300 '>
            <div className='relative'>
                <Image src={tutor.imageUrl} alt={tutor.tutorName} width={400} height={400} className='w-full h-60 object-cover ' />
                <div className='absolute bg-blue-500 text-white text-sm px-2 py-1 rounded-full top-2 right-2'>
                    <p className='font-semibold flex items-center gap-1'><AiFillSafetyCertificate size={20} />{shortExp || "N/A"}</p>
                </div>
            </div>
            <div className='p-5 space-y-5'>
                <div className='flex items-center justify-between gap-1 '>
                    <div>
                        <h2 className='text-xl font-bold'>{tutor.tutorName}</h2>
                        <p className='text-sm text-[#6c696d]'>{university || "N/A"}</p>
                    </div>
                    <h2 className='text-2xl font-bold'>${tutor.hourlyFee}<span className='text-sm font-normal'>/per hour</span></h2>
                </div>
                <Separator />
                <div className='mb-5'>
                    <div className='flex items-center justify-between text-[#6c696d] '>
                        <p className='font-bold'>Session Start Date:</p>
                        <p>{tutor.sessionStartDate}</p>
                    </div>
                    <div className='flex items-center justify-between text-[#6c696d] '>
                        <p className='font-bold'>Subject</p>
                        <p>{tutor.subject}</p>
                    </div>
                </div>
                <Separator />
                
                <div>
                    <Link href={`/all-tutors/${tutor._id}`} ><Button className='flex items-center gap-2 mt-2 text-white w-full'>Book Session</Button></Link>
                </div>
            </div>
        </Card>
    );
};

export default TutorCard;