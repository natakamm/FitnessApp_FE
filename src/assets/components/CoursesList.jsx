import { useContext, useEffect } from "react";
import { CourseContext } from "../../context/CourseContext";
import CoursesCard from "./CoursesCard";
import Skeleton from "./Skeleton";

const CoursesList = () => {
  const { allCoursesState, fetchAllCourses } = useContext(CourseContext);
  const { data, loading, error } = allCoursesState;

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-customAccent2 p-10 rounded-lg w-full max-w-6xl">
        <h2 className="font-bold italic text-2xl mb-5 text-center text-white">
          Check out our most <span className="font-bold">popular Courses</span>
        </h2>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            <Skeleton number={4} />
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((course) => (
              <CoursesCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
