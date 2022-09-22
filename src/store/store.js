import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import profileSlice from "./profileSlice";

export default configureStore({
  reducer: {
    chat: chatSlice,
    auth: authSlice,
    profile: profileSlice
  },
  devTools: true,
});