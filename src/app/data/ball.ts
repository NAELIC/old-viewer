import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import { RootState } from '../store';

interface BallState {
    position: {
        x: number,
        y: number
    }
}

const initialState: BallState = {
    position: {
        x: 0,
        y: 0
    },
};

export const BallSlice = createSlice({
    name: 'ball',
    initialState,
    reducers: {
        update:  (state, action: PayloadAction<BallState>)  => {
            state.position.x = action.payload.position.x
            state.position.y = action.payload.position.y
        }
    }
})

export const { update } = BallSlice.actions;

export const ballPosition = (state: RootState) => state.ball.position;

export default BallSlice.reducer;