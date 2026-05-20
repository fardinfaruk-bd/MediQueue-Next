import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/dist/server/api-utils";


export const createTutor = async (formData) => {
  "use server";
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const Tutor = Object.fromEntries(formData.entries());
  const newTutor = {
    ...Tutor,
    totalSlot: Number(Tutor.totalSlot),
    userId: session.user.id,
    userEmail: session.user.email,
    registeredDate: new Date().toISOString(),

  }
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTutor),
  });
  const data = await res.json();
  console.log("after post", data);
  //TODO: Redirect path after successful creation
  if(res.ok){
    redirect("/my-tutors")
  }
  return data;
};



export const cancelSession = async (id) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-sessions/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                status: "Cancelled"
            }),  
        });

    const data = await res.json();
    return data;

};

