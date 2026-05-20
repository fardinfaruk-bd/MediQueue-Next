"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';


import React from 'react';
import { FaStamp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookSessionModal = ({ tutor, user }) => {
    const router = useRouter();
    const handleBookSession = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const session = await authClient.getSession();
        const BookedSessionData = {
            ...Object.fromEntries(formData.entries()),
            subject: tutor.subject,
            tutorId: tutor._id,
            hourlyFee: tutor.hourlyFee,
            sessionStartDate: tutor.sessionStartDate,
            sessionEndDate: tutor.sessionEndDate,
            availableSchedule: tutor.availableSchedule,
            userEmail: session?.user?.email,
            status: "success",
        };
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify(BookedSessionData),
        });
        const BookedData = await res.json();
        toast.success(`Successfully Booked ${BookedSessionData.tutorName}!`);
        router.refresh();
    }

    const isBookedAllowed = new Date().setHours(0, 0, 0, 0) > new Date(tutor.sessionEndDate).setHours(0, 0, 0, 0) 
        console.log(isBookedAllowed, "Book validation");

    return (
        
        <Modal>
            <Button disabled className={"w-full"}isDisabled={isBookedAllowed || tutor.totalSlot === 0}>Book Session</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaStamp className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Book a Session</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Please fill out the form below to book a session with the tutor. We will get back to you shortly with the details.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={handleBookSession}>
                                    <TextField className="w-full" name="StudentName" type="text" defaultValue={`${user?.name}`}>
                                        <Label>Student Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="StudentPhone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="tutorName" type="text" defaultValue={`${tutor.tutorName}`} readOnly>
                                        <Label>Tutor Name</Label>
                                        <Input placeholder="Enter the tutor's name" />
                                    </TextField>
                                    <TextField className="w-full" name="tutorId" type="text" defaultValue={`${tutor._id}`} readOnly>
                                        <Label>Tutor Id</Label>
                                        <Input placeholder="Enter the tutor's id" />
                                    </TextField>
                                    <TextField className="w-full" name="StudentEmail" type="email" defaultValue={`${user?.email}`}>
                                        <Label></Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type='submit' slot="close">Book Session</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookSessionModal;