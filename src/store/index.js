/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import products from "./products.js";

export default configureStore({
  reducer: { products },
});
