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
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Helper function to get the visible cards based on the current index
  //getVisibleCards Function:
  //This function calculates the four visible cards based on the current index. It ensures that the carousel loops seamlessly by using modulo arithmetic.
  //The cards are always in positions -1, 0, 1, and 2 relative to the current index.
  const getVisibleCards = () => {
    if (!data || data.length === 0) return []; // Return empty array if data is not available
    const cards = [];
    for (let i = -1; i <= 2; i++) {
      const cardIndex = (index + i + data.length) % data.length;
      cards.push(data[cardIndex]);
    }
    return cards;
  };

  const getCardClass = (position) => {
    if (position === 0 || position === 1) {
      return "middle_card"; // Larger cards in the middle
    } else if (position === -1 || position === 2) {
      return "side_card"; // Smaller cards on the sides
    }
    return "hidden_card"; // Hidden cards (shouldn't happen in this case)
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

      <div className="bg-black flex items-center justify-center gap-16">
        <div className="arrow-left" onClick={handlePrevious}></div>

        <div className="flex items-center gap-18">
          {loading ? (
            <div className="flex flex-row gap-8 items-center justify-center">
              <Skeleton number={4} />
            </div>
          ) : (
            getVisibleCards().map((cat, idx) => {
              const relativePosition = idx - 1; // Positions: -1, 0, 1, 2
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
            })
          )}
        </div>
        <div className="arrow-right" onClick={handleNext}></div>
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};

export default CatsCarousel;
