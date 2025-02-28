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
    <div className="bg-black flex justify-center items-center">
      <div className="bg-customAccent2 p-10 rounded-2xl w-full max-w-6xl mb-26 ">
        <div className="mb-5 text-left text-white text-2xl">
          <span className="font-inter font-normal">Check out our most </span>
          <span className="font-inter font-extrabold italic">
            popular Courses
          </span>
        </div>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            <Skeleton number={4} />
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
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
