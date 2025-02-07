import { useState, useEffect, createContext } from "react";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const URL_BASE = "https://fitnessapp-be.onrender.com/";

  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categoriesloading, setCategoriesLoading] = useState(false);

  const fetchAllCategories = async () => {
    setCategoriesError(null);
    setCategoriesLoading(true);

    try {
      const res = await fetch(`${URL_BASE}category`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setCategoriesError(data.error || "Failed to fetch Categories.");
        setCategoriesLoading(false);
        return;
      }
      setCategories(data.categories);
    } catch (error) {
      setCategoriesError(
        error.message || "An error has occurred while fetching categories."
      );
    } finally {
      setCategoriesLoading(false);
    }
  };

  const [category, setCategory] = useState({});
  const [categoryError, setCategoryError] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const fetchOneCategory = async (categoryId) => {
    setCategoryError(null);
    setCategoryLoading(true);

    try {
      const res = await fetch(`${URL_BASE}category/${categoryId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setCategoryError(data.error);
        setCategoryLoading(false);
        return;
      }
      setCategory(data.category);
    } catch (error) {
      setCategoryError(
        error.message || "An error occurred while fetching your category."
      );
    } finally {
      setCategoryLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{ fetchAllCategories, categories, fetchOneCategory, category }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
