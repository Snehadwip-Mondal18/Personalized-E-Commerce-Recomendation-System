import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Future Service
// import {
//   getUserAddresses,
//   deleteAddress,
// } from "../../../services/addressService";

export default function Addresses() {
  const [addresses, setAddresses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadAddresses =
      async () => {
        try {
          /*
          const data =
            await getUserAddresses();

          setAddresses(data);
          */

          // Temporary
          setAddresses([]);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadAddresses();
  }, []);

  const handleDelete =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete this address?"
        );

      if (!confirmDelete) return;

      try {
        /*
        await deleteAddress(id);

        setAddresses((prev) =>
          prev.filter(
            (address) =>
              address._id !== id
          )
        );
        */

        console.log(
          "Delete Address:",
          id
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) {
    return (
      <div
        className="
          bg-white
          p-6
          rounded-xl
          shadow
        "
      >
        Loading addresses...
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
        bg-white
        p-6
        rounded-xl
        shadow
      "
    >
      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >
        <h2 className="text-2xl font-bold">
          My Addresses
        </h2>

        <button
          className="
            bg-blue-600
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-blue-700
          "
        >
          Add Address
        </button>
      </div>

      {addresses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No saved addresses
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {addresses.map(
            (address) => (
              <div
                key={address._id}
                className="
                  border
                  rounded-xl
                  p-5
                "
              >
                <div
                  className="
                    flex
                    justify-between
                    items-start
                  "
                >
                  <div>

                    <h3 className="font-bold text-lg">
                      {address.fullName}
                    </h3>

                    <p className="text-gray-600">
                      {
                        address.phone
                      }
                    </p>

                    <p className="mt-2">
                      {
                        address.street
                      }
                      ,
                      {" "}
                      {
                        address.city
                      }
                      ,
                      {" "}
                      {
                        address.state
                      }
                      ,
                      {" "}
                      {
                        address.pincode
                      }
                    </p>

                    {address.isDefault && (
                      <span
                        className="
                          inline-block
                          mt-3
                          px-3
                          py-1
                          text-sm
                          bg-green-100
                          text-green-600
                          rounded-full
                        "
                      >
                        Default Address
                      </span>
                    )}

                  </div>

                  <div className="flex gap-3">

                    <button
                      className="
                        bg-yellow-500
                        text-white
                        px-4
                        py-2
                        rounded
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          address._id
                        )
                      }
                      className="
                        bg-red-500
                        text-white
                        px-4
                        py-2
                        rounded
                      "
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            )
          )}

        </div>
      )}
    </motion.div>
  );
}