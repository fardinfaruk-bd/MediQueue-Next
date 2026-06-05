"use client";
import InfoUpdateModal from '@/components/InfoUpdateModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Profile - MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};

const userProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={user?.image}
                        alt={user?.name || "User"}
                        width={100}
                        height={100}
                        className='rounded-full border border-gray-200'
                    />
                </figure>
                <div className="card-body text-center space-y-6  items-center">
                    <div>
                        <h2 className="font-bold text-black font text-2xl ">{user?.name}</h2>
                        <p className='text-black opacity-60'>{user?.email}</p>
                    </div>
                    <InfoUpdateModal />
                </div>
            </div>
        </div>
    );
};

export default userProfilePage;