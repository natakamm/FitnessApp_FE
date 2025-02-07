import { useState, createContext } from "react";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const URL_BASE = "https://fitnessapp-be.onrender.com/";

  // Group states for fetching all categories instead of having many loading and error states for each of those
  const [allCategoriesState, setAllCategoriesState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const [singleCategoryState, setSingleCategoryState] = useState({
    data: {},
    loading: false,
    error: null,
  });

  //Fetch all categories
  const fetchAllCategories = async () => {
    setAllCategoriesState({ data: [], loading: true, error: null });

    try {
      const res = await fetch(`${URL_BASE}category`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch categories");
      }

      setAllCategoriesState({
        data: data.categories,
        loading: false,
        error: null,
      });
    } catch (error) {
      setAllCategoriesState({ data: [], loading: false, error: error.message });
    }
  };

  // Fetch one category
  const fetchOneCategory = async (categoryId) => {
    setSingleCategoryState({ data: {}, loading: true, error: null });

    try {
      const res = await fetch(`${URL_BASE}category/${categoryId}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch category");
      }

      setSingleCategoryState({
        data: data.category,
        loading: false,
        error: null,
      });
    } catch (error) {
      setSingleCategoryState({
        data: {},
        loading: false,
        error: error.message,
      });
    }
  };

  //USE LIKE THIS
  // const {
  //   allCategoriesState,
  //   singleCategoryState,
  //   fetchAllCategories,
  //   fetchOneCategory,
  // } = useContext(CategoryContext);

  // useEffect(() => {
  //   fetchAllCategories();
  //   fetchOneCategory("679b611adb090ce990b1a5f3");
  // }, []);

  // useEffect(() => {
  //   if (singleCategoryState.data) {
  //     console.log("ONE:", singleCategoryState.data);
  //   }
  //   if (allCategoriesState.data.length > 0) {
  //     console.log("ALL:", allCategoriesState.data);
  //   }
  // }, [singleCategoryState.data, allCategoriesState.data]);

  return (
    <CategoryContext.Provider
      value={{
        allCategoriesState,
        singleCategoryState,
        fetchAllCategories,
        fetchOneCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
