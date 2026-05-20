"use client";

import { useState } from "react";
import FilterSection from "./FilterSection";
import TutorCard from "./TutorCard";

const TutorContainer = ({ initialTutors }) => {
  const [tutors, setTutors] = useState(initialTutors);

  return (
    <div className="w-[90%] mx-auto py-10">
      <FilterSection setTutors={setTutors} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {tutors.length > 0 ? (
          tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))
        ) : (
          <p className="text-center col-span-full">
            No tutors found
          </p>
        )}
      </div>
    </div>
  );
};

export default TutorContainer;