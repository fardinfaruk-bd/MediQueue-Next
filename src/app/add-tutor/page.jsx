import AddTutorForm from '@/components/Add-Tutor-Form';
import { createTutor } from '@/lib/actions';
import React from 'react';

export const metadata = {
  title: "Add Tutor - MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};

const AddTutorPage = () => {
    return (
        <div className=' max-w-7xl mx-auto mt-20'>
            <div className="mb-10 space-y-3 text-center">
                <h1 className="text-2xl font-bold text-blue-500 ">Add Tutor Details</h1>
                <p className='opacity-80'>Please fill out the form below to add a tutor.</p>
            </div>
            <AddTutorForm createTutorAction={createTutor} />
        </div >
    );
};

export default AddTutorPage;