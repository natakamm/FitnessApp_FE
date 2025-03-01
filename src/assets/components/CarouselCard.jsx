import { Link } from "react-router-dom";

const CarouselCard = ({
  title,
  image,
  className,
  shortDescription,
  description,
}) => {
  return (
    <div className={`overflow-hidden bg-customSecondary ${className}`}>
      <figure>
        <img
          src={image}
          alt={title}
          className="object-cover h-[200px] w-full"
        />
      </figure>
      <div
        className={`flex flex-col ${
          className === "side_card" ? "py-1 px-4" : "py-3 px-4"
        }`}
      >
        <h3 className="font-inter line-clamp-1">{title}</h3>
        <p className="font-inter ">{shortDescription}</p>
        <Link
          to="/categories"
          state={{ title, image, shortDescription, description }}
        >
          <span
            className={
              className === "side_card"
                ? `hidden`
                : `self-end border-customPrimary bg-customPrimary border-2 px-3 py-0.5 rounded-md text-white font-inter text-sm hover:bg-transparent hover:text-customPrimary cursor-pointer`
            }
          >
            More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CarouselCard;
