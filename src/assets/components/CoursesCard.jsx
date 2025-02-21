import { Link } from "react-router-dom";

const CoursesCard = ({ course, expanded, toggleDescription }) => {
  const { title, description, mainImage } = course;

  const truncatedDescription =
    description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="overflow-hidden bg-customSecondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img
          src={mainImage}
          alt={title}
          className="object-cover h-[200px] w-full"
        />
      </figure>
      <div className="flex flex-col py-3 px-4">
        <h3 className="font-inter line-clamp-1">{title}</h3>

        {/* Show truncated or full description */}
        <p className="font-inter">
          {expanded ? description : truncatedDescription}
        </p>

        <button
          onClick={toggleDescription}
          className="self-end border-customPrimary bg-customPrimary border-2 px-3 py-0.5 rounded-md text-white font-inter text-sm hover:bg-transparent hover:text-customPrimary cursor-pointer"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
