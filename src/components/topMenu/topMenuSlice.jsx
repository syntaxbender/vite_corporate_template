import { createSlice } from '@reduxjs/toolkit';

const mobMenuSlice = createSlice({
  name: 'topMenu',
  initialState: {
    isActive: false,
    isSubsActive: {},
    activeIndex:0
  },
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
    setActiveIndex: (state, action) => {
        state.activeIndex = action.payload;
    },
    setSubsActive: (state, action) => {
      const { index, value } = action.payload;
      if(state.isSubsActive[index] == null) state.isSubsActive[index] = {};
      state.isSubsActive[index] = value;
  },
  },
});

export const {
    setActive,
    setSubsActive,
    setActiveIndex
} = mobMenuSlice.actions;

export default mobMenuSlice.reducer;
