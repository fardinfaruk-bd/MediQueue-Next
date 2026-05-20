import { getAllTutors } from "@/lib/data";
import TutorContainer from "@/components/TutorContainer";

const TutorsPage = async () => {
  const tutors = await getAllTutors();

  return <TutorContainer initialTutors={tutors} />;
};

export default TutorsPage;