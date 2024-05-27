import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchItems: (state, { payload }) => payload,

    resetSearch: () => {
      return initialState;
    }
  }

});

export const { searchItems, resetSearch } = searchSlice.actions;

export const searchSelector = state => state.search;

export default searchSlice.reducer;