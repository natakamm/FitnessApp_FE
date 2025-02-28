import { FaStar } from "react-icons/fa"; // Importing the star icon
import { FiWifi } from "react-icons/fi"; // Importing the WiFi icon
import { FiEye } from "react-icons/fi"; // Importing the Eye icon

const CoursesCard = ({ course, className = "" }) => {
  console.log("course data", course);
  return (
    <div
      className={`overflow-hidden ${className}   duration-300 overflow-hidden rounded-4xl shadow-lg border-2 border-transparent hover:border-customSecondary transition`}
    >
      <figure>
        <img
          src={course.mainImage}
          alt={course.title}
          className="object-cover h-[242px] w-full rounded-t-lg"
        />
      </figure>

      {/* Green line under the image */}
      <div className="bg-customSecondary h-1 w-full"></div>

      <div
        className={`flex flex-col bg-black ${
          className === "side_card" ? "py-1 px-4" : "py-3 px-4"
        }`}
      >
        {/* Title and Rating */}
        <div className="flex justify-between items-center">
          <h3 className="font-inter text-white text-lg">
            {course.title.split(":")[0]}
          </h3>
          <div className="flex items-center bg-gray-500 text-white px-2 py-1 rounded-8xl text-sm rounded-xl">
            <span className="mr-1">
              {course.averageRating ? `${course.averageRating}/5` : "0/5"}{" "}
              {/* Show averageRating with /5 or fallback to 0/5 */}
            </span>
            <FaStar className="text-customSecondary" />
          </div>
        </div>

        {/* Short description (1 line) */}
        <p className=" text-white text-xs  py-1 line-clamp-1">
          {course.description}
        </p>

        {/* Icons and Keywords */}
        <div className="flex items-center mt-4">
          <div className="flex items-center mr-4">
            <div className="text-green-500 mr-1">
              {(() => {
                // Debugging: Check what course.intensity contains
                console.log("Raw Course Intensity:", course.intensity);

                // Normalize intensity key (remove spaces and ensure consistent casing)
                const intensityKey = course.intensity
                  ? course.intensity.trim().toLowerCase()
                  : "";

                console.log("Normalized Intensity Key:", intensityKey); // Debugging log

                // Mapping intensity levels to number of filled bars
                const intensityLevels = {
                  basic: 1,
                  intermediate: 2,
                  advanced: 3,
                };

                // Get number of bars to fill
                const filledBars = intensityLevels[intensityKey] || 0;

                console.log("Final Filled Bars:", filledBars); // Debugging log

                return (
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* First Bar */}
                    <path
                      d="M4 10C4 8.89543 3.10457 8 2 8C0.89543 8 -4.85396e-07 8.89543 -4.37114e-07 10L4 10ZM4 20L4 10L-4.37114e-07 10L0 20L4 20Z"
                      fill={filledBars >= 1 ? "#80AC06" : "#444444"}
                    />
                    {/* Second Bar */}
                    <path
                      d="M11 5.5C11 4.39543 10.1046 3.5 9 3.5C7.89543 3.5 7 4.39543 7 5.5L11 5.5ZM11 20L11 5.5L7 5.5L7 20L11 20Z"
                      fill={filledBars >= 2 ? "#80AC06" : "#444444"}
                    />
                    {/* Third Bar */}
                    <path
                      d="M18 2C18 0.895431 17.1046 -4.82823e-08 16 0C14.8954 4.82822e-08 14 0.89543 14 2L18 2ZM18 20L18 2L14 2L14 20L18 20Z"
                      fill={filledBars >= 3 ? "#80AC06" : "#444444"}
                    />
                  </svg>
                );
              })()}
            </div>
            <div className="text-gray-500 px-1.5">
              {(() => {
                // Debugging: Check equipment value
                console.log("Equipment Available:", course.equipment);

                // Determine the dumbbell color based on equipment availability
                const dumbbellPrimaryColor = course.equipment
                  ? "#80AC06"
                  : "#444444";
                const dumbbellSecondaryColor = course.equipment
                  ? "#C7F000"
                  : "#666666";

                return (
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="14.3052"
                      cy="8.15844"
                      rx="3.5"
                      ry="7"
                      transform="rotate(-7.57808 14.3052 8.15844)"
                      fill={dumbbellPrimaryColor}
                    />
                    <ellipse
                      cx="13.3141"
                      cy="8.29046"
                      rx="2.5"
                      ry="5"
                      transform="rotate(-7.57808 13.3141 8.29046)"
                      fill={dumbbellSecondaryColor}
                    />
                    <path
                      d="M4.62451 7.42871L11.5634 6.50557C12.6583 6.3599 13.664 7.12943 13.8097 8.22435C13.9553 9.31927 13.1858 10.325 12.0909 10.4706L5.15202 11.3938L4.62451 7.42871Z"
                      fill={dumbbellPrimaryColor}
                    />
                    <ellipse
                      cx="4.39257"
                      cy="9.47729"
                      rx="3.5"
                      ry="7"
                      transform="rotate(-7.57808 4.39257 9.47729)"
                      fill={dumbbellPrimaryColor}
                    />
                    <ellipse
                      cx="3.40122"
                      cy="9.60906"
                      rx="2.5"
                      ry="5"
                      transform="rotate(-7.57808 3.40122 9.60906)"
                      fill={dumbbellSecondaryColor}
                    />
                  </svg>
                );
              })()}
            </div>
          </div>

          {/* Displaying categories (Keywords) */}
          <div className="flex space-x-2">
            {/* Add a check to ensure category exists before mapping */}
            {course.category &&
            Array.isArray(course.category) &&
            course.category.length > 0 ? (
              course.category.map((category) => (
                <span
                  key={category._id}
                  className="bg-customAccent2 text-white text-xs px-3 py-1 rounded-full"
                >
                  {category.title}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-xs">
                No categories available
              </span>
            )}

            {/* Static "Fitness" category with a margin-left gap */}
            {/* <span className="bg-customAccent2 text-white text-xs px-3 py-1 rounded-full ml-2">
              Fitness
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
