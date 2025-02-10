import { useContext, useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import { CategoryContext } from "../../context/CategoryContext";

const CatsCarousel = () => {
  const { allCategoriesState, fetchAllCategories } =
    useContext(CategoryContext);
  const { data, loading, error } = allCategoriesState;

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div>
      <div className="mb-9">
        <h2 className="font-bold italic font-inter text-white text-2xl">
          Our Categories
        </h2>
        <p className="text-customAccent3 text-md">
          Discover our numerous categories and find which course fits best for
          your own personal training.
        </p>
      </div>
      {data.length > 0
        ? data.map((cat) => <h1 key={cat._id}>{cat.title}</h1>)
        : "No categories available"}

      {/* Loading Skeleton */}
      <div className="arrow-left"></div>
      {loading && (
        <div className="flex flex-row gap-8 items-center justify-center">
          <Skeleton number={4} />
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default CatsCarousel;
