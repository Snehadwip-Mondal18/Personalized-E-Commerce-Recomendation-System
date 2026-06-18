import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function AdminRoute({
  children,
}) {
  const {
    user,
    loading,
    isAdmin,
  } = useAuth();

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (!isAdmin) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
}