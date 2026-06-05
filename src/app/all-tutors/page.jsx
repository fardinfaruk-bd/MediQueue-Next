import { getAllTutors } from "@/lib/data";
import TutorContainer from "@/components/TutorContainer";
export const metadata = {
  title: "All Tutors - MediQueue",
  description: "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
};
const TutorsPage = async () => {
  const tutors = await getAllTutors();

  return <TutorContainer initialTutors={tutors} />;
};

export default TutorsPage;