import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getCategories } from "../../services/categoryService";

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Shop By Category
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {categories.map((category) => (

          <Link
            key={category._id}
            to={`/category/${category.slug}`}
          >

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>

              </div>

            </motion.div>

          </Link>

        ))}

      </div>

    </section>
  );
}