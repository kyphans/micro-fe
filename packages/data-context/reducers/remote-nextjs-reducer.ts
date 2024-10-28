import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RemoteNextState {
  inputValue: string
}

const initialState: RemoteNextState = {
  inputValue: 'init value from remote next',
};

export const remoteNextSlice = createSlice({
  name: "remoteNext",
  initialState,
  reducers: {
    onInputChange: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    onClearInput: (state) => {
      state.inputValue = '';
    }
  }
});

export const {
  onInputChange,
  onClearInput
} = remoteNextSlice.actions;

export default remoteNextSlice.reducer;
