import CancelButton from '@/components/CancelBtn';
import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    console.log("session:", session);

    if (!session) {
        return <div>Not logged in</div>;
    }

    const res = await fetch(
        `http://localhost:5000/my-tutors?email=${session.user.email}`
    );

    const MyTutors = await res.json();

    console.log("my tutors are", MyTutors);
    return (
        <div className='w-[90%] mx-auto'>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>Tutor Name</Table.Column>
                            <Table.Column>Subject</Table.Column>
                            <Table.Column>Available Schedule</Table.Column>
                            <Table.Column>Hourly Fee</Table.Column>
                            <Table.Column>Total Slot</Table.Column>
                            <Table.Column>Registration Date</Table.Column>
                            <Table.Column>Action</Table.Column>

                        </Table.Header>
                        <Table.Body>
                            {MyTutors.map((tutor) => (
                                <Table.Row key={tutor._id}>
                                    <Table.Cell>{tutor.tutorName}</Table.Cell>
                                    <Table.Cell>{tutor.subject}</Table.Cell>
                                    <Table.Cell>{tutor.availableSchedule}</Table.Cell>
                                    <Table.Cell>{tutor.hourlyFee}</Table.Cell>
                                    <Table.Cell>{tutor.totalSlot}</Table.Cell>
                                    <Table.Cell><Button>Cancel</Button></Table.Cell>
                                    <Table.Cell><Button>Cancel</Button></Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyTutorsPage;