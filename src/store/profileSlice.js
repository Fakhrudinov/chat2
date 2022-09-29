import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isChecked: false
  },
  reducers: {
    checkedChange: (state) => {
      return { 
        ...state,         
        isChecked: !state.isChecked
        };
    },
  },
});

export const { checkedChange } = profileSlice.actions;

export const selectCheckBox = (state) => state.profile.isChecked;

export default profileSlice.reducer;