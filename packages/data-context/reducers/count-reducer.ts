import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CheckoutState {
  count: number
}

const initialState: CheckoutState = {
  count: 0
};

export const checkoutSlice = createSlice({
  name: "checkout",
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
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
