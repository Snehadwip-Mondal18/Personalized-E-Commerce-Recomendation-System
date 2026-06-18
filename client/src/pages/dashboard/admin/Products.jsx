import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

import {
  getProducts,
  deleteProduct,
} from "../../../services/productService";

export default function Products() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts =
    async () => {
      try {
        const data =
          await getProducts();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  const handleDelete =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete this product?"
        );

      if (!confirmDelete)
        return;

      try {
        await deleteProduct(id);

        setProducts((prev) =>
          prev.filter(
            (product) =>
              product._id !== id
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >
        <h2 className="text-3xl font-bold">
          Products
        </h2>

        <Link
          to="/dashboard/admin/add-product"
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-lg
            hover:bg-blue-700
          "
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-10">
          No products found
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">

                <th className="text-left py-4">
                  Image
                </th>

                <th className="text-left py-4">
                  Product
                </th>

                <th className="text-left py-4">
                  Category
                </th>

                <th className="text-left py-4">
                  Price
                </th>

                <th className="text-left py-4">
                  Stock
                </th>

                <th className="text-left py-4">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {products.map(
                (product) => (
                  <tr
                    key={product._id}
                    className="border-b"
                  >
                    <td className="py-4">

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                        className="
                          w-16
                          h-16
                          object-cover
                          rounded-lg
                        "
                      />

                    </td>

                    <td>
                      {
                        product.name
                      }
                    </td>

                    <td>
                      {
                        product.category
                      }
                    </td>

                    <td>
                      ₹
                      {
                        product.price
                      }
                    </td>

                    <td>
                      {
                        product.stock
                      }
                    </td>

                    <td>

                      <div className="flex gap-3">

                        <Link
                          to={`/dashboard/admin/edit-product/${product._id}`}
                          className="
                            bg-yellow-500
                            text-white
                            p-2
                            rounded
                          "
                        >
                          <Pencil
                            size={18}
                          />
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              product._id
                            )
                          }
                          className="
                            bg-red-500
                            text-white
                            p-2
                            rounded
                          "
                        >
                          <Trash2
                            size={18}
                          />
                        </button>

                      </div>

                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      )}
    </div>
  );
}