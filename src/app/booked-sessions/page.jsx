import CancelButton from '@/components/CancelBtn';
import NoDataFound from '@/components/NoDataFound';
import { auth } from '@/lib/auth';
import { getBookedSessions } from '@/lib/data';
import { Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "Booked Sessions - MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};


const BookedSessionPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log("session:", session);

    if (!session) {
        return <div>Not logged in</div>;
    }

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions?email=${session.user.email}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
    );
    const BookSessions = await res.json();
    console.log("booked sessions are", BookSessions);
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            {BookSessions?.length === 0 ? <NoDataFound /> : <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Phone</Table.Column>
                            <Table.Column>Tutor Name</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Cancel</Table.Column>

                        </Table.Header>
                        <Table.Body>
                            {BookSessions.map((bookedSession) => (
                                <Table.Row key={bookedSession._id}>
                                    <Table.Cell>{bookedSession.StudentName}</Table.Cell>
                                    <Table.Cell>{bookedSession.StudentPhone}</Table.Cell>
                                    <Table.Cell>{bookedSession.tutorName}</Table.Cell>
                                    <Table.Cell>{bookedSession.StudentEmail}</Table.Cell>
                                    <Table.Cell
                                        className={
                                            bookedSession.status.toLowerCase() === "cancelled"
                                                ? "text-red-500 "
                                                : bookedSession.status.toLowerCase() === "success"
                                                    ? "text-green-500 "
                                                    : ""
                                        }
                                    >
                                        {bookedSession.status.charAt(0).toUpperCase() + bookedSession.status.slice(1)}
                                    </Table.Cell>
                                    <Table.Cell><CancelButton bookedSession={bookedSession} status={bookedSession.status} /></Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>}
        </div>
    );
};

export default BookedSessionPage;