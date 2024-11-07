import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from '../Containers/Password/passwordSlice.ts';
import { calculatorReducer } from '../Containers/Calculator/calculatorSlice.ts';


export const store = configureStore({
  reducer: {
    password: passwordReducer,
    calculator: calculatorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = typeof store.dispatch;