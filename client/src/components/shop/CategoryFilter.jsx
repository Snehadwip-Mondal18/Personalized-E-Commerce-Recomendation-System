import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchCategories = async () => {
      try {

        const data = await getCategories();

        setCategories(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();

  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="text-xl font-bold mb-6">
        Categories
      </h3>

      <div className="space-y-3">

        <button
          onClick={() => setSelectedCategory("")}
          className={`
            block w-full text-left
            px-3 py-2 rounded-lg
            ${
              selectedCategory === ""
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }
          `}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() =>
              setSelectedCategory(category.slug)
            }
            className={`
              block w-full text-left
              px-3 py-2 rounded-lg
              ${
                selectedCategory === category.slug
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {category.name}
          </button>
        ))}

      </div>

    </div>
  );
}