import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from '../Containers/Password/passwordSlice.ts';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = typeof store.dispatch;