import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tictactoeReducer from '../features/tictactoe/tictactoe';

export const store = configureStore({
  reducer: {
    tictactoe: tictactoeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
