import { createSlice } from "@reduxjs/toolkit";
import products from "./products.json";

const prevCartItems = window.localStorage.getItem("cart");

const Products = {
    name: "products",
    initialState: {
      data: products,
      cart: prevCartItems ? JSON.parse(prevCartItems) : [],
      show: false,
    },
  },
  reducers = (Products.reducers = {});

reducers.addToCart = function (state, { data }) {
  const targetItem = state.cart.find((i) => i.data.id === data.id);

  if (targetItem) {
    targetItem.quantity++;
    state.cart = [...state.cart];
  } else {
    const newItem = {
      data,
      quantity: 1,
    };
    state.cart = [...state.cart, newItem];
  }

  window.localStorage.setItem("cart", JSON.stringify(state.cart));
};

reducers.decreaseQuantity = function (state, { data }) {
  const targetItem = state.cart.find((i) => i.data.id === data.id);
  targetItem.quantity--;
  state.cart = state.cart.filter((i) => i.quantity > 0);
  window.localStorage.setItem("cart", JSON.stringify(state.cart));
};

reducers.removeFromCart = function (state, { data }) {
  const targetItem = state.cart.find((i) => i.data.id === data.id);
  state.cart = state.cart.filter((i) => i.data.id !== targetItem.data.id);
  window.localStorage.setItem("cart", JSON.stringify(state.cart));
};

reducers.clearCart = function (s) {
  s.cart = [];
  window.localStorage.setItem("cart", JSON.stringify(s.cart));
};

reducers.showCart = function (state, { payload }) {
  state.show = payload;
};

export default createSlice(Products).reducer;
