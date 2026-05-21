"use client";
import { authClient } from '@/lib/auth-client';
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AlertDialogBtn = ({ tutor }) => {
    const router = useRouter();
    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                 authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json();
        if (res.ok) {
            toast.success(`${tutor.tutorName} has been deleted.`)
            router.refresh();
        }
    }

    return (
        <AlertDialog >
            <Button variant='outline' className={"border border-red-500 text-red-500"}><TrashBin /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete {tutor.tutorName} permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{tutor.tutorName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={handleDelete}>
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog >
    );
};

export default AlertDialogBtn;