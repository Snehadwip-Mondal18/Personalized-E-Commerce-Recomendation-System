import {
BrowserRouter as Router,
Routes,
Route,
useLocation,
} from "react-router-dom";

import {
AnimatePresence,
// eslint-disable-next-line no-unused-vars
motion,
} from "framer-motion";

import "./App.css";

import MainLayout from "./layouts/MainLayout";

/* ===========================
PUBLIC PAGES
=========================== */

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Blog from "./pages/public/Blog";
import Shop from "./pages/public/Shop";
import ProductDetails from "./pages/public/ProductDetails";
import CategoryPage from "./pages/public/CategoryPage";
import Cart from "./pages/public/Cart";
import Wishlist from "./pages/public/Wishlist";

/* ===========================
AUTH PAGES
=========================== */

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

/* ===========================
PROTECTED ROUTE
=========================== */

import ProtectedRoute from "./routes/ProtectedRoute";

/* ===========================
DASHBOARD LAYOUT
=========================== */

import DashboardLayout from "./pages/dashboard/DashboardLayout";

/* ===========================
USER DASHBOARD
=========================== */

import DashboardHome from "./pages/dashboard/user/DashboardHome";
import UserOrders from "./pages/dashboard/user/Orders";
import UserWishlist from "./pages/dashboard/user/Wishlist";
import Addresses from "./pages/dashboard/user/Addresses";
import Settings from "./pages/dashboard/user/Settings";

/* ===========================
ADMIN DASHBOARD
=========================== */

import Products from "./pages/dashboard/admin/Products";
import AddProduct from "./pages/dashboard/admin/AddProduct";
import EditProduct from "./pages/dashboard/admin/EditProduct";
import AdminOrders from "./pages/dashboard/admin/Orders";
import Users from "./pages/dashboard/admin/Users";
import Analytics from "./pages/dashboard/admin/Analytics";

function AnimatedRoutes() {
const location = useLocation();

return ( <AnimatePresence mode="wait">
<motion.div
key={location.pathname}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{
duration: 0.5,
ease: "easeInOut",
}}
> <Routes location={location}>

```
      {/* ===========================
          PUBLIC ROUTES
      =========================== */}

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/category/:slug"
          element={<CategoryPage />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Protected Wishlist */}

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

      </Route>

      {/* ===========================
          AUTH ROUTES
      =========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* ===========================
          DASHBOARD ROUTES
      =========================== */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        {/* USER DASHBOARD */}

        <Route
          index
          element={<DashboardHome />}
        />

        <Route
          path="orders"
          element={<UserOrders />}
        />

        <Route
          path="wishlist"
          element={<UserWishlist />}
        />

        <Route
          path="addresses"
          element={<Addresses />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

        {/* ADMIN DASHBOARD */}

        <Route
          path="admin/products"
          element={<Products />}
        />

        <Route
          path="admin/add-product"
          element={<AddProduct />}
        />

        <Route
          path="admin/edit-product/:id"
          element={<EditProduct />}
        />

        <Route
          path="admin/orders"
          element={<AdminOrders />}
        />

        <Route
          path="admin/users"
          element={<Users />}
        />

        <Route
          path="admin/analytics"
          element={<Analytics />}
        />

      </Route>

    </Routes>
  </motion.div>
</AnimatePresence>

);
}

export default function App() {
return ( <Router> <AnimatedRoutes /> </Router>
);
}
