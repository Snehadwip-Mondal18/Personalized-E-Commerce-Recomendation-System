import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";

// Future Service
// import {
//   getProfile,
//   updateProfile,
//   changePassword,
// } from "../../../services/userService";

export default function Settings() {
  const [loading, setLoading] =
    useState(true);

  const [profile, setProfile] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  const [passwords, setPasswords] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  useEffect(() => {
    const loadProfile =
      async () => {
        try {
          /*
          const data =
            await getProfile();

          setProfile(data);
          */

          setProfile({
            name: "",
            email: "",
            phone: "",
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadProfile();
  }, []);

  const handleProfileChange =
    (e) => {
      setProfile({
        ...profile,
        [e.target.name]:
          e.target.value,
      });
    };

  const handlePasswordChange =
    (e) => {
      setPasswords({
        ...passwords,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleProfileSubmit =
    async (e) => {
      e.preventDefault();

      try {
        /*
        await updateProfile(profile);
        */

        toast.success(
          "Profile updated successfully"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to update profile"
        );
      }
    };

  const handlePasswordSubmit =
    async (e) => {
      e.preventDefault();

      if (
        passwords.newPassword !==
        passwords.confirmPassword
      ) {
        return toast.error(
          "Passwords do not match"
        );
      }

      try {
        /*
        await changePassword(
          passwords
        );
        */

        toast.success(
          "Password changed successfully"
        );

        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to change password"
        );
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
        Loading...
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
        space-y-6
      "
    >
      {/* Profile */}

      <div
        className="
          bg-white
          p-6
          rounded-xl
          shadow
        "
      >
        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Profile Settings
        </h2>

        <form
          onSubmit={
            handleProfileSubmit
          }
          className="space-y-4"
        >
          <div>
            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={
                handleProfileChange
              }
              className="
                w-full
                border
                rounded-lg
                p-3
                mt-1
              "
            />
          </div>

          <div>
            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={
                handleProfileChange
              }
              className="
                w-full
                border
                rounded-lg
                p-3
                mt-1
              "
            />
          </div>

          <div>
            <label>
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={
                handleProfileChange
              }
              className="
                w-full
                border
                rounded-lg
                p-3
                mt-1
              "
            />
          </div>

          <button
            type="submit"
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password */}

      <div
        className="
          bg-white
          p-6
          rounded-xl
          shadow
        "
      >
        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Change Password
        </h2>

        <form
          onSubmit={
            handlePasswordSubmit
          }
          className="space-y-4"
        >
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={
              passwords.currentPassword
            }
            onChange={
              handlePasswordChange
            }
            className="
              w-full
              border
              rounded-lg
              p-3
            "
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={
              passwords.newPassword
            }
            onChange={
              handlePasswordChange
            }
            className="
              w-full
              border
              rounded-lg
              p-3
            "
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              passwords.confirmPassword
            }
            onChange={
              handlePasswordChange
            }
            className="
              w-full
              border
              rounded-lg
              p-3
            "
          />

          <button
            type="submit"
            className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-green-700
            "
          >
            Change Password
          </button>
        </form>
      </div>
    </motion.div>
  );
}