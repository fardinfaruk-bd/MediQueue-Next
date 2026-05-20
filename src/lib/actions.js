import { headers } from "next/headers";
import { auth } from "./auth";


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
  const res = await fetch("http://localhost:5000/tutors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTutor),
  });
  const data = await res.json();
  console.log("after post", data);
  //TODO: Redirect path after successful creation

  return data;
};



export const cancelSession = async (id) => {
    
    await fetch(
        `http://localhost:5000/booked-sessions/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: "Cancelled"
            }),
        }
    );

    revalidatePath("/booked-sessions");
};

