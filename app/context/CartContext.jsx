"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// =========================
// PROVIDER
// =========================
export function CartProvider({ children }) {
  // =========================
  // STATES
  // =========================
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // =========================
  // LOAD FROM LOCAL STORAGE (FIX HYDRATION)
  // =========================
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedDiscount = Number(localStorage.getItem("discount")) || 0;
    const storedCoupon = localStorage.getItem("couponCode") || "";
    const storedCheckout =
      JSON.parse(localStorage.getItem("checkoutDetails")) || {};

    setCartItems(storedCart);
    setDiscount(storedDiscount);
    setCouponCode(storedCoupon);
    setCheckoutDetails((prev) => ({ ...prev, ...storedCheckout }));
  }, []);

  // =========================
  // SAVE TO LOCAL STORAGE
  // =========================
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("discount", discount);
  }, [discount]);

  useEffect(() => {
    localStorage.setItem("couponCode", couponCode);
  }, [couponCode]);

  useEffect(() => {
    localStorage.setItem("checkoutDetails", JSON.stringify(checkoutDetails));
  }, [checkoutDetails]);

  // =========================
  // CART FUNCTIONS
  // =========================

  const addToCart = (product, quantity = 1, brand = "") => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.slug === product.slug && item.brand === brand
      );

      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug && item.brand === brand
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity, brand }];
    });
  };

  const removeFromCart = (slug, brand = "") => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.slug === slug && item.brand === brand)
      )
    );
  };

  const increaseQuantity = (slug, brand = "") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug && item.brand === brand
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (slug, brand = "") => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.slug === slug && item.brand === brand
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // =========================
  // COUPON FUNCTIONS
  // =========================

  const applyCoupon = (code) => {
    const formattedCode = code.trim().toUpperCase();

    // 20% OFF
    if (formattedCode === "SAVE15") {

      const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const discountAmount = Math.round(subtotal * 0.15);

      setDiscount(discountAmount);
      setCouponCode(formattedCode);

      return {
        success: true,
        message: "15% Discount Applied!",
      };
    }

    setDiscount(0);
    setCouponCode("");

    return {
      success: false,
      message: "Invalid Coupon Code",
    };
  };

  const removeCoupon = () => {
    setDiscount(0);
    setCouponCode("");
  };

  // =========================
  // CLEAR CART
  // =========================
  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setCouponCode("");
  };

  // =========================
  // DERIVED VALUES
  // =========================
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalTotal = Math.max(cartTotal - discount, 0);

  // =========================
  // PROVIDE
  // =========================
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        discount,
        couponCode,
        applyCoupon,
        removeCoupon,

        checkoutDetails,
        setCheckoutDetails,

        clearCart,

        totalItems,
        cartTotal,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// =========================
// SAFE HOOK
// =========================
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}