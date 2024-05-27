import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import categoriesSlice from './reducers/categoriesSlice';
import itemsSlice from './reducers/itemsSlice';
import searchSlice from './reducers/searchSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    cart: cartSlice,
    search: searchSlice,
  },
});

export default store;