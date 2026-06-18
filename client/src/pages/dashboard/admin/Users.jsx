import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getAllUsers,
  deleteUser,
  updateUserRole,
} from "../../../services/userService";

export default function Users() {
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data =
        await getAllUsers();

      setUsers(data);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete =
    async (userId) => {
      const confirmDelete =
        window.confirm(
          "Delete this user?"
        );

      if (!confirmDelete) return;

      try {
        await deleteUser(userId);

        setUsers((prev) =>
          prev.filter(
            (user) =>
              user._id !== userId
          )
        );

        toast.success(
          "User deleted"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to delete user"
        );
      }
    };

  const handleRoleChange =
    async (userId, role) => {
      try {
        await updateUserRole(
          userId,
          role
        );

        setUsers((prev) =>
          prev.map((user) =>
            user._id === userId
              ? {
                  ...user,
                  role,
                }
              : user
          )
        );

        toast.success(
          "Role updated"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to update role"
        );
      }
    };

  const filteredUsers =
    users.filter((user) =>
      `${user.name} ${user.email}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        <h2 className="text-2xl font-bold">
          Manage Users
        </h2>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            border
            rounded-lg
            px-4
            py-2
            w-full
            md:w-80
          "
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 border-b">

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Role
              </th>

              <th className="p-4 text-left">
                Joined
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map(
              (user) => (
                <tr
                  key={user._id}
                  className="
                    border-b
                    hover:bg-gray-50
                  "
                >

                  <td className="p-4">
                    <div className="flex items-center gap-3">

                      <img
                        src={
                          user.avatar ||
                          "https://ui-avatars.com/api/?name=" +
                            user.name
                        }
                        alt={user.name}
                        className="
                          w-10
                          h-10
                          rounded-full
                        "
                      />

                      <span>
                        {user.name}
                      </span>

                    </div>
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">

                    <select
                      value={
                        user.role
                      }
                      onChange={(
                        e
                      ) =>
                        handleRoleChange(
                          user._id,
                          e.target
                            .value
                        )
                      }
                      className="
                        border
                        rounded-lg
                        px-3
                        py-2
                      "
                    >
                      <option value="user">
                        User
                      </option>

                      <option value="admin">
                        Admin
                      </option>

                    </select>

                  </td>

                  <td className="p-4">
                    {new Date(
                      user.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        handleDelete(
                          user._id
                        )
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}