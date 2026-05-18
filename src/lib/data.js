export const getAvailableTutors = async() => {
    const res = await fetch("http://localhost:5000/available-tutors");
    const data = await res.json();
    return data;
}