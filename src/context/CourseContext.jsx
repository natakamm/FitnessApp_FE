// src/context/CourseContext.js
import { createContext, useState } from "react";

// Create the context for Courses
export const CourseContext = createContext();

// Default export for the Provider component
export default function CourseContextProvider({ children }) {
  const URL_BASE = "https://fitnessapp-be.onrender.com/"; // Your API endpoint

  // State for holding all courses' data, loading, and errors
  const [allCoursesState, setAllCoursesState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  // Function to fetch all courses
  const fetchAllCourses = async () => {
    setAllCoursesState({ data: [], loading: true, error: null });

    try {
      const res = await fetch(`${URL_BASE}course`); // Your actual API endpoint
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch courses");
      }

      console.log("data is", data);

      // Extract the necessary fields (title, description, mainImage) from the response
      const courses = data.map((course) => ({
        title: course.title,
        description: course.description,
        mainImage: course.mainImage,
        averageRating: course.averageRating,
        category: course.category,
      }));

      // Set the state with the extracted data
      setAllCoursesState({ data: courses, loading: false, error: null });
    } catch (error) {
      setAllCoursesState({ data: [], loading: false, error: error.message });
    }
  };

  return (
    <CourseContext.Provider value={{ allCoursesState, fetchAllCourses }}>
      {children}
    </CourseContext.Provider>
  );
}
