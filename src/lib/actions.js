

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

export const bookSession = async (formData) => {
  "use server";
  const BookedSessionData = {
    ...Object.fromEntries(formData.entries()),
    status: "success",
  };
  console.log("session booking data", BookedSessionData);
  const res = await fetch("http://localhost:5000/booked-sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(BookedSessionData),
  });
  const data = await res.json();
  console.log("after booking session", data);
  return data;
};

