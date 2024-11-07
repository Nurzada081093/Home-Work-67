import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
}

const initialState: PasswordState = {
  value: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    enterTheValue: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {enterTheValue} = calculatorSlice.actions;