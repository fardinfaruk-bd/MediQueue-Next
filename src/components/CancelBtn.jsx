"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
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
        <Button
            isDisabled={status === "Cancelled"}
            variant="outline"
            className={"border-red-500"}
            onClick={() => handleCancel(bookedSession._id)}
        >
            <MdOutlineCancel
                size={20}
                color={"red"}
            />
        </Button>
    );
};

export default CancelButton;