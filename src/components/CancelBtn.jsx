"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

import { MdOutlineCancel } from "react-icons/md";

import { toast } from "react-toastify";

const CancelButton = ({ bookedSession, status }) => {
    
    const router = useRouter();
    const handleCancel = async (id) => {
        
        const res = await fetch(
            `http://localhost:5000/booked-sessions/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: "Cancelled",
                }),
            }
        );

        const data = await res.json();

        
        if (data.modifiedCount > 0) {
            toast.success("Session Cancelled");
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