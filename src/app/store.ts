import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import BallReducer from './data/ball';
import FieldReducer from './data/field';
import RobotsReducer from './data/robot';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ball: BallReducer,
    field: FieldReducer,
    robots: RobotsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
