import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';
import { FaStamp } from 'react-icons/fa';

const BookSessionModal = ({tutor}) => {
    return (
        <Modal>
            <Button variant="primary" className={"w-full"}>Book Session</Button>
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
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Student Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="tel">
                                        <Label>Phone</Label>
                                        <Input  placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="tutorName" type="text" defaultValue={`${tutor.tutorName}`} readOnly>
                                        <Label>Tutor Name</Label>
                                        <Input placeholder="Enter the tutor's name" />
                                    </TextField>
                                    <TextField className="w-full" name="company" defaultValue={`${tutor._id}`} readOnly>
                                        <Label>Tutor Id</Label>
                                        <Input placeholder="Enter the tutor's id" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Student Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookSessionModal;