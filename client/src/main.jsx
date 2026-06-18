import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistProvider.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
          <Toaster position="top-right" />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);