import BookSessionModal from '@/components/BookSessionModal';
import { auth } from '@/lib/auth';
import { getTutorById } from '@/lib/data';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

import { MdVerified } from 'react-icons/md';

const AllDetailsPage = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    
    const { id } = await params;
    const tutorDetails = await getTutorById(id);
    console.log(tutorDetails);
    return (
        <div >
            <Card className='min-h-[60vh] rounded-none flex items-center justify-center'>
                <div className='flex justify-between max-w-10xl mx-auto'>
                    <div className='flex items-center gap-10'>
                        <Card className='p-5 shadow-lg bg-[#EEF0FF] w-96 flex items-center gap-5'>
                            <div className='space-y-5'>
                                <div className='flex items-center justify-center'>
                                    <Image src={tutorDetails.imageUrl} alt={tutorDetails.tutorName} width={300} height={300} className=' h-60 w-60 object-cover rounded-full ' />
                                </div>
                                <div >
                                    <h1 className='text-3xl text-black font-bold flex items-center gap-1 justify-center'>{tutorDetails.tutorName} <MdVerified color='blue' /></h1>
                                    <p className='opacity-50 text-black text-center'>{tutorDetails.description}</p>
                                </div>
                            </div>
                        </Card>
                        <div>
                            <h2 className='text-2xl font-bold'>Tutor Details</h2>
                            <p className='text-xl opacity-80'>Subject: {tutorDetails.subject}</p>
                            <p className='text-xl opacity-80'>Fee: ${tutorDetails.hourlyFee}/hour</p>
                            <p className='text-xl opacity-80'>Session Start Date: {tutorDetails.sessionStartDate}</p>
                            <p className='text-xl opacity-80'>Session End Date: {tutorDetails.sessionEndDate}</p>
                            <p className='text-xl opacity-80'>Total Slot: {tutorDetails.totalSlot}</p>
                            <p className='text-xl opacity-80'>Location: {tutorDetails.location}</p>
                            <p className='text-xl opacity-80'>Teaching Mode: {tutorDetails.teachingMode} </p>
                            <p className='text-xl opacity-80'>Available Session : {tutorDetails.availableSchedule}</p>
                            <div className='mt-10'>
                                {tutorDetails.totalSlot === 0 && <p className='text-red-600'>No Slot Available</p>}
                                <BookSessionModal tutor={tutorDetails} user={user} />
                            </div>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default AllDetailsPage;