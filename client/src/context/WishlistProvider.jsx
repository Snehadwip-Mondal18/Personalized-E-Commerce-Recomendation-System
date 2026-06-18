import { useState, useEffect } from "react";
import { WishlistContext } from "./wishlistContext";

export const WishlistProvider = ({
  children,
}) => {

  const [wishlistItems, setWishlistItems] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "wishlist"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );

  }, [wishlistItems]);

  const addToWishlist = (
    product
  ) => {

    const exists =
      wishlistItems.find(
        (item) =>
          item._id === product._id
      );

    if (!exists) {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  const removeFromWishlist =
    (id) => {

      setWishlistItems(
        wishlistItems.filter(
          (item) =>
            item._id !== id
        )
      );
    };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};