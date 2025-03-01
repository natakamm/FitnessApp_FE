import { useLocation } from "react-router-dom";
import CoursesList from "../assets/components/CoursesList";
import FindMoreButton from "../assets/components/FindMoreButton";
import defaultImage from "../assets/images/default.jpg";

const CategoriesPage = () => {
  const location = useLocation();
  const { title, image, shortDescription, description } = location.state || {};

  const categoryImage = image || defaultImage; //if category is clicked from Navbar

  const scrollToCourses = () => {
    const courseSection = document.getElementById("courses-section");
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero-style category section */}
      <div className="relative">
        {/* Background Image with a black overlay */}
        <figure>
          <img
            src={categoryImage} // Category image
            alt={title} // Category title as alt text
            className="brightness-50 w-full object-cover h-[600px]" // Image styling
          />
          {/* Black overlay with reduced opacity */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </figure>

        {/* Category Title and Description */}
        <div className="absolute top-1/3 left-4 w-full flex flex-col justify-center items-start text-left px-4 z-10">
          <h1 className="font-inter font-extrabold italic text-white text-6xl">
            {title}
          </h1>
          <p className="font-inter text-white text-lg max-w-2xl mt-5">
            {shortDescription}
          </p>
          <button
            onClick={scrollToCourses}
            className="mt-6 bg-customSecondary text-black px-6 py-2 rounded-lg font-inter italic "
          >
            Find Courses
          </button>
        </div>
      </div>

      {/* Black screen for text section with Courses */}
      <div id="courses-section" className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-inter italic text-sm mb-10">{description}</p>

          {/* Courses List Section */}
          <CoursesList />
        </div>
      </div>
      <div className="bg-black text-center p-1 px-2">
        {" "}
        <FindMoreButton text="Find More" />
      </div>
    </>
  );
};

export default CategoriesPage;
