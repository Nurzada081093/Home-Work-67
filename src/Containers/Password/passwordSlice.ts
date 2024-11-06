import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
  displayColor: string;
  resultText: string;
}

const initialState: PasswordState = {
  value: '',
  displayColor: '',
  resultText: '',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    guessThePassword: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    }
  }

});

export const passwordReducer = passwordSlice.reducer;
export const { guessThePassword } = passwordSlice.actions;