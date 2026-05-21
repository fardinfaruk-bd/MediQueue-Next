import CancelButton from '@/components/CancelBtn';
import NoDataFound from '@/components/NoDataFound';
import { getBookedSessions } from '@/lib/data';
import { Table } from '@heroui/react';
import React from 'react';


const BookedSessionPage = async () => {
    const BookSessions = await getBookedSessions();
    console.log(BookSessions);
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