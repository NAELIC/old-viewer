import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { RobotProps } from "@bit/naelic.viewer.field/Robot"
import { act } from '@testing-library/react';

interface RobotsState {
    blue: Array<RobotProps>
    yellow: Array<RobotProps>
}

const initialState: RobotsState = {
    yellow: [],
    blue: []
};

export const RobotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<RobotsState>) => {
            state.blue = action.payload.blue
            state.yellow = action.payload.yellow
        }
    }
})

export const { update } = RobotsSlice.actions;

export const robotsYellow = (state: RootState) => state.robots.yellow;
export const robotsBlue = (state: RootState) => state.robots.blue;

export default RobotsSlice.reducer;