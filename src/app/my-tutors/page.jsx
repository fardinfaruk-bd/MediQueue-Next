import AlertDialogBtn from '@/components/AlertDialog';
import NoDataFound from '@/components/NoDataFound';
import UpdateTutorModal from '@/components/UpdateTutorModal';
import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "My Tutors - MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};


const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log("session:", session);

    if (!session) {
        return <div>Not logged in</div>;
    }
    
    const {token} = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors?email=${session.user.email}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    const MyTutors = await res.json();

    console.log("my tutors are", MyTutors);

    
    return (
        <div className='w-[90%] min-h-screen mx-auto'>
            {MyTutors.length > 0 ?<Table>
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
                                    <Table.Cell>{new Date(tutor.registeredDate).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>
                                        <UpdateTutorModal tutor={tutor} />
                                        <AlertDialogBtn tutor={tutor}/>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>: <NoDataFound />}
        </div>
    );
};

export default MyTutorsPage;