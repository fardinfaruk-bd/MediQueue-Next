"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import { MdOutlineCancel } from "react-icons/md";

import { toast } from "react-toastify";

const CancelButton = ({ bookedSession, status }) => {

    const router = useRouter();
    const handleCancel = async (id) => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify({
                status: "Cancelled",
            }),
        }
        );
        if (res.ok) {
            toast.success(`Successfully Cancelled ${bookedSession.tutorName}!`);
            router.refresh();
        }
    };

    return (
        <AlertDialog>
            <Button isDisabled={status === "Cancelled"} variant="danger"><MdOutlineCancel /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel {bookedSession.tutorName}'s Session permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel <strong>{bookedSession.tutorName}</strong> Session and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={() => handleCancel(bookedSession._id)}>
                                Confirm
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelButton;