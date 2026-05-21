"use client"
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const UpdateTutorModal = ({ tutor }) => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const tutorData = Object.fromEntries(formData);
        const { data: tokenData } = await authClient.token();
        console.log(tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(destinationData)
        })
        const data = await res.json();

        //TODO
        if (data.modifiedCount > 0 || data.modifiedCount === 0) {
            toast.success(`Successfully Update ${tutorData?.tutorName}!`);
            router.refresh();
        }

    }
    return (
        <Modal>
            <Button variant='outline' className={"border border-blue-500 text-blue-500"}><BiEdit /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Tutor</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body >
                            <Surface variant="default">
                                <form className=" space-y-8 ">

                                    {/* Section: Basic Information */}
                                    <div className="space-y-6">
                                        <div className=" border-b border-gray-200 pb-3">
                                            <h2 className="font-bold text-black">Basic Information</h2>
                                        </div>
                                        <div className='grid grid-cols-2 gap-2'>
                                            <div className="col-span-2 sm:col-span-1">
                                                <TextField name="tutorName" defaultValue={tutor.tutorName} isRequired>
                                                    <Label>Tutor Name</Label>
                                                    <Input placeholder="John Doe" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                            <div className='col-span-2 sm:col-span-1'>
                                                <Select
                                                    name="subject"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select Subject"
                                                    defaultValue={tutor.subject}
                                                >
                                                    <Label>Subject</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Mathematics" textValue="Mathematics">
                                                                Mathematics
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Physics" textValue="Physics">
                                                                Physics
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Biology" textValue="Biology">
                                                                Biology
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="English" textValue="English">
                                                                English
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="History" textValue="History">
                                                                History
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Computer Science" textValue="Computer Science">
                                                                Computer Science
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>
                                        </div>


                                        {/* Photo Upload Widget */}
                                        <div>
                                            <TextField name="imageUrl" defaultValue={tutor.imageUrl} isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/mr.smith.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        {/* Section: Availability & Logistics */}
                                        <div className="space-y-6">
                                            <div className=" border-b border-gray-200 pb-3">
                                                <h2 className="font-bold text-black">Schedule & Logistics</h2>
                                            </div>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className='col-span-2 sm:col-span-1'>
                                                    <TextField name="availableSchedule" defaultValue={tutor.availableSchedule} isRequired>
                                                        <Label>Available Schedule</Label>
                                                        <Input
                                                            type="text"
                                                            placeholder="e.g. Sun - Thu 5:00 PM - 8:00 PM"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                <div className='col-span-2 sm:col-span-1' >
                                                    <TextField name="sessionStartDate" defaultValue={tutor.sessionStartDate} isRequired>
                                                        <Label>Session Start Date</Label>
                                                        <Input
                                                            type="date"
                                                            placeholder="2027-01-01"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                <div className='col-span-2 sm:col-span-1'>
                                                    <TextField name="sessionEndDate" defaultValue={tutor.sessionEndDate} isRequired>
                                                        <Label>Session End Date</Label>
                                                        <Input
                                                            type="date"
                                                            placeholder="2027-06-30"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>
                                                <div className='col-span-2 sm:col-span-1'>
                                                    <TextField name="hourlyFee" defaultValue={tutor.hourlyFee} isRequired>
                                                        <Label>Hourly Fee (USD)</Label>
                                                        <Input
                                                            type="number"
                                                            placeholder="45.00"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                <div className='col-span-2 sm:col-span-1'>
                                                    <TextField name="totalSlot" defaultValue={tutor.totalSlot} isRequired>
                                                        <Label>Total Slots Available</Label>
                                                        <Input
                                                            type="number"
                                                            placeholder="10"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                <div className='col-span-2 sm:col-span-1'>
                                                    <TextField name="location" defaultValue={tutor.location} isRequired>
                                                        <Label>Location (Area/City)</Label>
                                                        <Input
                                                            type="text"
                                                            placeholder="Agrabad, Chattogram"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>


                                                <div className='col-span-2 '>
                                                    <Select
                                                        name="teachingMode"
                                                        isRequired
                                                        className="w-full"
                                                        placeholder="Select Teaching Mode"
                                                        defaultValue={tutor.teachingMode}
                                                    >
                                                        <Label>Teaching Mode</Label>
                                                        <Select.Trigger className="rounded-2xl">
                                                            <Select.Value />
                                                            <Select.Indicator />
                                                        </Select.Trigger>
                                                        <Select.Popover>
                                                            <ListBox>
                                                                <ListBox.Item id="Both" textValue="Beach">
                                                                    Both
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="Offline" textValue="Mountain">
                                                                    Offline
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                                <ListBox.Item id="Online" textValue="Mountain">
                                                                    Online
                                                                    <ListBox.ItemIndicator />
                                                                </ListBox.Item>
                                                            </ListBox>
                                                        </Select.Popover>
                                                    </Select>
                                                </div>


                                            </div>
                                        </div>


                                        <div className="space-y-6">
                                            <div className="border-b  pb-3">
                                                <h2 className='font-bold text-black'>Professional Background</h2>
                                            </div>
                                            <div >
                                                <TextField name="description" defaultValue={tutor.description} isRequired>
                                                    <Label>Institution Experience</Label>
                                                    <TextArea
                                                        rows={4}
                                                        placeholder="Describe the Institution Experience"

                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Actions */}
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button variant="primary" type="submit" slot="close">Update</Button>
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

export default UpdateTutorModal;