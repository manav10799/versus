import { configureStore } from "@reduxjs/toolkit";
import compareProducts from "../slices/productCompareSlice";

const Store = configureStore({
  reducer: {
    addCompareProducts: compareProducts,
  },
});

export default Store;
