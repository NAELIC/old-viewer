import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FieldState {
    width: number;
    length: number;
    center_radius: number;
    goal: {
        width: number;
        depth: number;
    };
    penalty: {
        width: number;
        depth: number;
    };
}

const initialState: FieldState = {
    width: 6,
    length: 9,
    center_radius: 0.5,
    goal: {
        width: 1.0,
        depth: 0.2,
    },
    penalty: {
        width: 2.0,
        depth: 1.0,
    },
};

export const FieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<FieldState>) => {
            state = action.payload
        }
    }
})

export const { update } = FieldSlice.actions;

export const field = (state: RootState) => state.field;


export default FieldSlice.reducer;