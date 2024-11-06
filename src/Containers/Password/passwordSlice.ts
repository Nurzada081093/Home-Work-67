import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface PasswordState {
  value: string;
  displayColor: string;
  resultText: string;
  doorPassword: string;
}

const initialState: PasswordState = {
  value: '',
  displayColor: '',
  resultText: '',
  doorPassword: '1235',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    enterThePassword: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      } else {
        toast.error('You must enter no more than 4 characters!');
      }
    },

    removeThePassword: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
    },

    checkThePassword: (state) => {
      if (state.value === state.doorPassword) {
        state.displayColor = 'lawngreen';
        state.resultText = 'Access Granted!';
      } else {
        state.displayColor = 'red';
        state.resultText = 'Access Denied!';
      }
    },

    resetThePassword: (state) => {
      state.value = '';
      state.resultText = '';
      state.displayColor = '';
    }
  },
});

export const passwordReducer = passwordSlice.reducer;
export const { enterThePassword, removeThePassword, checkThePassword, resetThePassword } = passwordSlice.actions;