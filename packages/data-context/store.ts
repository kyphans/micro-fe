import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import countSlice from "./reducers/remote-react-reducer";
import remoteNextSlice from "./reducers/remote-nextjs-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const reducers = {
  count: countSlice,
  remoteNext: remoteNextSlice,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export { PersistGate };
