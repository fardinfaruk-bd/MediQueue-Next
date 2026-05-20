import { headers } from "next/headers";
import { auth } from "./auth";

export const getAvailableTutors = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-tutors`);
    const data = await res.json();
    return data;
}

export const getAllTutors = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
    const data = await res.json();
    return data;
}


export const getTutorById = async(id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`);
    const data = await res.json();
    return data;
}


export const getBookedSessions = async() => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
}