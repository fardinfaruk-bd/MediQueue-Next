"use client";

import { Button, Input } from "@heroui/react";
import { useEffect, useState } from "react";

const FilterSection = ({ setTutors }) => {
  const initialState = {
    tutorName: "",
    sessionStartDate: "",
    sessionEndDate: "",
  };

  const [filters, setFilters] = useState(initialState);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = async () => {
    setFilters(initialState);

    const res = await fetch("http://localhost:5000/tutors");
    const data = await res.json();

    setTutors(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams();

      if (filters.tutorName) {
        params.append("tutorName", filters.tutorName);
      }

      if (filters.sessionStartDate) {
        params.append("sessionStartDate", filters.sessionStartDate);
      }

      if (filters.sessionEndDate) {
        params.append("sessionEndDate", filters.sessionEndDate);
      }

      const res = await fetch(
        `http://localhost:5000/tutors?${params}`
      );

      const data = await res.json();
      setTutors(data);
    };

    fetchData();
  }, [filters, setTutors]);

  return (
    <div className="grid grid-cols-4 gap-4 items-start max-w-5xl mx-auto">

      {/* Tutor Name */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">
          Tutor Name
        </label>
        <Input
          name="tutorName"
          value={filters.tutorName}
          placeholder="Search Tutor"
          onChange={handleChange}
        />
      </div>

      {/* Start Date */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">
          Session Start Date
        </label>
        <input
          type="date"
          name="sessionStartDate"
          value={filters.sessionStartDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded-lg w-full"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium mb-1">
          Session End Date
        </label>
        <input
          type="date"
          name="sessionEndDate"
          value={filters.sessionEndDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded-lg w-full"
        />
      </div>

      {/* Reset */}
      <div className="mt-7">
        <Button onPress={handleReset}>
          Reset
        </Button>
      </div>

    </div>
  );
};

export default FilterSection;