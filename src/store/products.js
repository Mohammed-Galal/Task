import { createSlice } from "@reduxjs/toolkit";
import products from "./products.json";

const Products = {
    name: "products",
    initialState: {
      data: products,
      cart: [],
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
};

reducers.decreaseQuantity = function (state, { data }) {
  const targetItem = state.cart.find((i) => i.data.id === data.id);
  targetItem.quantity--;
  state.cart = state.cart.filter((i) => i.quantity > 0);
};

reducers.removeFromCart = function (state, { data }) {
  const targetItem = state.cart.find((i) => i.data.id === data.id);
  state.cart = state.cart.filter((i) => i.data.id !== targetItem.data.id);
};

reducers.clearCart = function (s) {
  s.cart = [];
};

reducers.showCart = function (state, { payload }) {
  state.show = payload;
};

export default createSlice(Products).reducer;
