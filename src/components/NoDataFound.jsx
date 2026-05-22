import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BsDatabaseDash } from 'react-icons/bs';

const NoDataFound = () => {
    return (
        <div className='min-h-[70vh] flex items-center justify-center'>
            <Card className='max-w-5xl bg-[#DBE1FF] p-20'>
                <div className='flex flex-col items-center justify-center space-y-10'>
                    <div className='space-y-5 flex flex-col items-center text-center'>
                        <BsDatabaseDash size={100} color='blue'/>
                        <h1 className='text-4xl font-bold text-blue-500'>No Data Found</h1>
                        <p >Sorry, we couldn't find any data that match your search criteria.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Link href={"/"}><Button variant='primary'>Go Home</Button></Link>
                        <Link href={"/all-tutors"}><Button variant='outline' className={"border border-blue-500 text-blue-500"}>View All Tutors</Button></Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default NoDataFound;