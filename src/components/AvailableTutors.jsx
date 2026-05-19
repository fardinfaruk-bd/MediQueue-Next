import { getAvailableTutors } from '@/lib/data';
import React from 'react';
import TutorCard from './TutorCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const AvailableTutors = async() => {
    const AvailableTutors = await getAvailableTutors();
    console.log(AvailableTutors);
    return (
        <div className='max-w-5xl mx-auto my-20'>
            <div className='flex items-center justify-center mb-10'>
                <h1 className='text-4xl font-bold text-blue-500 '>Available Tutors</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    AvailableTutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                }
            </div>
            <Link href={"/all-tutors"} className='flex justify-center mx-auto  mt-5 text-white '>
                <Button>View All Tutors</Button>
            </Link>
        </div>
    );
};

export default AvailableTutors;