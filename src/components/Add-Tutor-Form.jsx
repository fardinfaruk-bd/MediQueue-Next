import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import React from 'react';

const AddTutorForm = ({ createTutorAction }) => {
    return (
        <Card className='shadow-lg '>
            <form action={createTutorAction} className="p-10 space-y-8 max-w-3xl">

                {/* Section: Basic Information */}
                <div className="space-y-6">
                    <div className=" border-b border-gray-200 pb-3">
                        <h2 className="font-bold text-black">Basic Information</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="col-span-2 sm:col-span-1">
                            <TextField name="tutorName" isRequired>
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
                        <TextField name="imageUrl" isRequired>
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
                                <TextField name="availableSchedule" isRequired>
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
                                <TextField name="sessionStartDate" isRequired>
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
                                <TextField name="sessionEndDate" isRequired>
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
                                <TextField name="hourlyFee" isRequired>
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
                                <TextField name="totalSlot" isRequired>
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
                                <TextField name="location" isRequired>
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
                            <TextField name="description" isRequired>
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
                <Button
                    type="submit"
                    variant="outline"
                    slot="close"
                    className=" rounded-none w-full bg-blue-500 text-white"
                >
                    Add Tutor
                </Button>


            </form>
        </Card>
    );
};

export default AddTutorForm;