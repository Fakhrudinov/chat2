import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import profileSlice from "./profileSlice";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import galerySlice from "./galerySlice";

const functionDelay = (store) => (next) => (action) => {
  const delay = action?.meta?.delay;
  if (!delay) return next(action);
  const dispose = setTimeout(() => next(action), delay);
  return () => clearTimeout(dispose);
};

const reducers = combineReducers({
  chat: chatSlice,
  auth: authSlice,
  profile: profileSlice,
  galery: galerySlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(functionDelay),
    devTools: true,
});

export const persistor = persistStore(store);