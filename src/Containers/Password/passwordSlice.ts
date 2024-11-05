import { createSlice } from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
}

const initialState: PasswordState = {
  value: '1235',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    guessThePassword: (state) => {
      state.value += 'a';
    }
  }

});

export const passwordReducer = passwordSlice.reducer;
export const { guessThePassword } = passwordSlice.actions;