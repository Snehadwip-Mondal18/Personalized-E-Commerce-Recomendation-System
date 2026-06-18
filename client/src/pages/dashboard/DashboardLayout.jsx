import { Outlet, Link, useNavigate } from "react-router-dom";

import {
LayoutDashboard,
ShoppingBag,
Heart,
MapPin,
Settings,
Package,
Users,
BarChart3,
LogOut,
PlusCircle,
} from "lucide-react";

import { useAuth } from "../../hooks/useAuth";


export default function DashboardLayout() {
const { user, logout, isAdmin } = useAuth();

const navigate = useNavigate();

const handleLogout = () => {
logout();
navigate("/login");
};


return ( <section className="min-h-screen bg-gray-100"> <div className="max-w-7xl mx-auto px-6 py-8">

    <div className="grid lg:grid-cols-4 gap-6">

      {/* Sidebar */}

      <aside
        className="
          bg-white
          rounded-2xl
          shadow
          p-6
          h-fit
        "
      >
        <div className="mb-8">

          <div
            className="
              w-16
              h-16
              rounded-full
              bg-gray-200
              flex
              items-center
              justify-center
              text-xl
              font-bold
            "
          >
            {user?.name?.charAt(0)}
          </div>

          <h2 className="mt-3 font-bold text-lg">
            {user?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email}
          </p>

          <p
            className="
              text-xs
              text-blue-600
              mt-1
              capitalize
            "
          >
            {user?.role}
          </p>

        </div>

        {/* USER MENU */}

        <div className="space-y-2">

          <Link
            to="/dashboard"
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
            "
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/dashboard/orders"
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
            "
          >
            <ShoppingBag size={18} />
            Orders
          </Link>

          <Link
            to="/dashboard/wishlist"
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
            "
          >
            <Heart size={18} />
            Wishlist
          </Link>

          <Link
            to="/dashboard/addresses"
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
            "
          >
            <MapPin size={18} />
            Addresses
          </Link>

          <Link
            to="/dashboard/settings"
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-lg
              hover:bg-gray-100
            "
          >
            <Settings size={18} />
            Settings
          </Link>

        </div>

        {/* ADMIN MENU */}

        {isAdmin && (
          <>
            <hr className="my-6" />

            <h3
              className="
                text-sm
                font-semibold
                text-gray-500
                mb-3
              "
            >
              ADMIN PANEL
            </h3>
            <div className="space-y-2">

              <Link
                to="/dashboard/admin/products"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-gray-100
                "
              >
                <Package size={18} />
                Products
              </Link>

              <Link
                to="/dashboard/admin/add-product"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-gray-100
                "
              >
                <PlusCircle size={18} />
                Add Product
              </Link>

              <Link
                to="/dashboard/admin/orders"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-gray-100
                "
              >
                <ShoppingBag size={18} />
                Orders
              </Link>

              <Link
                to="/dashboard/admin/users"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-gray-100
                "
              >
                <Users size={18} />
                Users
              </Link>

              <Link
                to="/dashboard/admin/analytics"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-gray-100
                "
              >
                <BarChart3 size={18} />
                Analytics
              </Link>

            </div>
          </>
        )}

        <button
          onClick={handleLogout}
          className="
            mt-8
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            py-3
            rounded-xl
            cursor-pointer
          "
        >
          <LogOut size={18} />
          Logout
        </button>

      </aside>

      {/* Page Content */}

      <main className="lg:col-span-3">
        <Outlet />
      </main>

    </div>

  </div>
</section>

);
}
