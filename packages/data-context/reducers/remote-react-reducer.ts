import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CountState {
  count: number
}

const initialState: CountState = {
  count: 0
};

export const remoteReactSlice = createSlice({
  name: "remoteNext",
  initialState,
  reducers: {
    onIncreaseQuantity: (state, action: PayloadAction<number>) => {
      state.count += action.payload || 1;
    },
    onClearCount: (state) => {
      state.count = 0;
    },
  }
});

export const {
  onIncreaseQuantity,
  onClearCount,
} = remoteReactSlice.actions;

export default remoteReactSlice.reducer;
