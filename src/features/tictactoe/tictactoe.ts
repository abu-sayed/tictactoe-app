import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { API_URL } from '../../app.constants';

interface TictactoeState {
  board: string[][];
  whoseTurn: number;
  isGameOver: boolean;
  result: number;
}

const initialState: TictactoeState = {
  board: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '10'],
  ],
  whoseTurn: 1,
  isGameOver: false,
  result: -1,
};

export const tictactoeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<TictactoeState>) => {
      return { ... state, ...action.payload };
    }
  },
});

export const { update } = tictactoeSlice.actions;

export const getStateAsync = (): AppThunk => async(dispatch) => {
  try {
    const responseRaw = await fetch(`${API_URL}/state`);
    const responseJson: TictactoeState  = await responseRaw.json();
    dispatch(update(responseJson))
  } catch (error) {
    console.log(error.message);
  }
};

export const initializeAsync = (): AppThunk => async(dispatch) => {
  try {
    const responseRaw = await fetch(`${API_URL}/init`, {
      method: 'POST',
    });
    const responseJson: TictactoeState  = await responseRaw.json();
    dispatch(update(responseJson))
  } catch (error) {
    console.log(error.message);
  }
};

export const playAsync = (rowIndex: number, columnIndex: number): AppThunk => async(dispatch) => {
  try {
    const responseRaw = await fetch(`${API_URL}/play/${rowIndex}/${columnIndex}`, {
      method: 'POST',
    });
    const responseJson: TictactoeState  = await responseRaw.json();
    dispatch(update(responseJson))
  } catch (error) {
    console.log(error.message);
  }
};

export const selectTictactoe = (state: RootState) => state.tictactoe;

export default tictactoeSlice.reducer;
