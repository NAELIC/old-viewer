import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    }
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

export default BallSlice.reducer;