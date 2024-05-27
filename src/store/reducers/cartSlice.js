import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrIncreaseItem: (state, { payload }) => {
      const itemExists = state.some(item => item.id === payload);

      if(itemExists) {
        return state.map(item => item.id === payload ? { ...item, amount: item.amount + 1 } : item);
      }

      return [...state, { id: payload, amount: 1}];
    },

    decreseItemAmount: (state, { payload }) => {
      const onlyOneItem = state.some(item => item.id === payload && item.amount === 1);

      if(onlyOneItem) {
        return state.filter(item => item.id !== payload);
      }

      return state.map(item => item.id === payload ? { ...item, amount: item.amount - 1 } : item);

    },

    removeFromCart: (state, { payload }) => {
      return state.filter(item => item.id !== payload);
    },

    clearCart: () => {
      return initialState;
    }
  }

});

export const { addOrIncreaseItem, decreseItemAmount, removeFromCart, clearCart } = cartSlice.actions;

export const cartSelector = state => state.cart;

export default cartSlice.reducer;