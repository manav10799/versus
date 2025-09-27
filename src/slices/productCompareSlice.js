import { createSlice } from "@reduxjs/toolkit";

const compareProduct = createSlice({
  name: "Compare",
  initialState: [],
  reducers: {
    addCompareItems: (state, actions) => {
      if (state.length > 2) return;
      const exists = state.find((item) => item.id === actions.payload.id);
      if (!state.every((item) => item.category === actions.payload.category)) {
        alert(`Cannot add items from different categories for comparison`);
        return;
      }

      if (!exists) {
        state.push(actions.payload);
      }
    },
    removeCompareItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCompareItems: () => {
      return [];
    },
  },
});

export default compareProduct.reducer;
export const { addCompareItems, removeCompareItem, clearCompareItems } =
  compareProduct.actions;
