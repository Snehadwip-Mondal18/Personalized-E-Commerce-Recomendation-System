import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getProductById,
  updateProduct,
} from "../../../services/productService";

export default function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      brand: "",
      category: "",
      description: "",
      image: "",
      price: "",
      stock: "",
    });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product =
          await getProductById(id);

        setFormData({
          name:
            product.name || "",

          brand:
            product.brand || "",

          category:
            product.category || "",

          description:
            product.description || "",

          image:
            product.image || "",

          price:
            product.price || "",

          stock:
            product.stock || "",
        });
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      await updateProduct(
        id,
        formData
      );

      toast.success(
        "Product updated successfully"
      );

      navigate(
        "/dashboard/admin/products"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update product"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        Edit Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>
          <label className="block mb-1 font-medium">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="
              w-40
              h-40
              object-cover
              rounded-lg
              border
            "
          />
        )}

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block mb-1 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

        </div>

        <div>
          <label className="block mb-1 font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700
            disabled:opacity-50
          "
        >
          {submitting
            ? "Updating..."
            : "Update Product"}
        </button>

      </form>

    </div>
  );
}