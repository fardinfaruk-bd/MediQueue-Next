

export const createTutor = async (formData) => {
  "use server";
  const newTutor = Object.fromEntries(formData.entries());
  console.log("new tutor data", newTutor);
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

