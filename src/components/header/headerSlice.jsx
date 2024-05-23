import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isLoaderDone: false,
    isSticky: false
  },
  reducers: {
    setLoaderStatus: (state, action) => {
      state.isLoaderDone = action.payload;
    },
    setStickyStatus: (state, action) => {
        state.isSticky = action.payload;
    },
  },
});

export const {
    setLoaderStatus,
    setStickyStatus
} = headerSlice.actions;

export default headerSlice.reducer;
