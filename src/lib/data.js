export const getAvailableTutors = async() => {
    const res = await fetch("http://localhost:5000/available-tutors");
    const data = await res.json();
    return data;
}

export const getAllTutors = async() =>{
    const res = await fetch("http://localhost:5000/tutors");
    const data = await res.json();
    return data;
}

export const getTutorById = async(id) =>{
    const res = await fetch(`http://localhost:5000/tutors/${id}`);
    const data = await res.json();
    return data;
}

export const getBookedSessions = async() => {
    const res = await fetch("http://localhost:5000/booked-sessions");
    const data = await res.json();
    return data;
}