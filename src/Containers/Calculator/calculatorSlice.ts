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

    getTheResult: (state) => {
      state.value = (eval(state.value));
    },

    resetTheState: (state) => {
      state.value = '';
    },

    removeTheValue: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {enterTheValue, getTheResult, resetTheState, removeTheValue} = calculatorSlice.actions;