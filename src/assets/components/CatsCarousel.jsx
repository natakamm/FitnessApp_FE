import { useContext, useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import CarouselCard from "./CarouselCard";
import { CategoryContext } from "../../context/CategoryContext";

const CatsCarousel = () => {
  const { allCategoriesState, fetchAllCategories } =
    useContext(CategoryContext);
  const { data, loading, error } = allCategoriesState;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const getCardClass = (position) => {
    if (position === 0 || position === 1) {
      return "middle_card";
    } else {
      if (position === -1 || position === 2) {
        return "side_card";
      }
    }
    return "hidden_card";
  };

  return (
    <div className="bg-black px-14 py-10">
      <div className="mb-16">
        <h2 className="font-bold italic font-inter text-white text-2xl mb-3">
          Our Categories
        </h2>
        <p className="text-customAccent3 text-md">
          Discover our numerous categories and find which course fits best for
          your own personal training.
        </p>
      </div>

      <div className=" bg-black flex items-center justify-center gap-16">
        <div className="arrow-left" onClick={handlePrevious}></div>

        <div className="flex items-center gap-18">
          {data.map((cat, idx) => {
            const relativePosition = idx - index; // Calculate position relative to current index
            const cardClass = getCardClass(relativePosition);

            return (
              <CarouselCard
                key={cat._id}
                image={cat.image}
                title={cat.title}
                shortDescription={cat.shortDescription}
                className={cardClass}
              />
            );
          })}
          {loading && (
            <div className="flex flex-row gap-8 items-center justify-center">
              <Skeleton number={4} />
            </div>
          )}
        </div>
        <div className="arrow-right" onClick={handleNext}></div>
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default CatsCarousel;
