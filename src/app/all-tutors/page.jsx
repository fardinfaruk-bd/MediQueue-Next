import TutorCard from '@/components/TutorCard';
import { getAllTutors } from '@/lib/data';
import React from 'react';

const AllTutorsPage = async () => {
    const tutors = await getAllTutors();
    console.log(tutors);
    return (
        <div className='my-20'>
            <div className="text-center mb-8">
                <h1 className='text-5xl text-blue-500 font-bold'>Browse Our Subject Experts</h1>
                <p className='opacity-80 text-sm'>Connect with world-class tutors across 100+ subjects. Our vetted experts help you master complex concepts through personalized one-on-one sessions.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-5 mx-auto'>
                {
                    tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                }
            </div>
        </div>
    );
};

export default AllTutorsPage;