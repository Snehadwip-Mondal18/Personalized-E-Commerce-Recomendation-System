import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Future Service
// import { createProduct } from "../../../services/productService";

export default function AddProduct() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      brand: "",
      category: "",
      description: "",
      price: "",
      stock: "",
      image: "",
      featured: false,
      recommended: false,
    });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        /*
        await createProduct(
          formData
        );
        */

        console.log(formData);

        toast.success(
          "Product Added Successfully"
        );

        navigate(
          "/dashboard/admin/products"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed To Add Product"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-8
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Add Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Product Name */}

        <div>
          <label className="font-medium">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-2
            "
          />
        </div>

        {/* Brand */}

        <div>
          <label className="font-medium">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-2
            "
          />
        </div>

        {/* Category */}

        <div>
          <label className="font-medium">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-2
            "
          >
            <option value="">
              Select Category
            </option>

            <option value="Laptop">
              Laptop
            </option>

            <option value="Mobile">
              Mobile
            </option>

            <option value="Headphone">
              Headphone
            </option>

            <option value="Smart Watch">
              Smart Watch
            </option>

            <option value="Accessories">
              Accessories
            </option>
          </select>
        </div>

        {/* Description */}

        <div>
          <label className="font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-2
            "
          />
        </div>

        {/* Price + Stock */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          <div>
            <label className="font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="
                w-full
                border
                rounded-lg
                p-3
                mt-2
              "
            />
          </div>

          <div>
            <label className="font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              className="
                w-full
                border
                rounded-lg
                p-3
                mt-2
              "
            />
          </div>
        </div>

        {/* Image URL */}

        <div>
          <label className="font-medium">
            Product Image URL
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="
              w-full
              border
              rounded-lg
              p-3
              mt-2
            "
          />
        </div>

        {/* Flags */}

        <div className="space-y-3">
          <label
            className="
              flex
              items-center
              gap-3
            "
          >
            <input
              type="checkbox"
              name="featured"
              checked={
                formData.featured
              }
              onChange={handleChange}
            />

            Featured Product
          </label>

          <label
            className="
              flex
              items-center
              gap-3
            "
          >
            <input
              type="checkbox"
              name="recommended"
              checked={
                formData.recommended
              }
              onChange={handleChange}
            />

            Recommended Product
          </label>
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
            bg-blue-600
            text-white
            px-8
            py-3
            rounded-lg
            hover:bg-blue-700
            disabled:bg-gray-400
          "
        >
          {loading
            ? "Adding..."
            : "Add Product"}
        </button>
      </form>
    </div>
  );
}