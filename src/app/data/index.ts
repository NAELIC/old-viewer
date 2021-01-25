import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { WorldMessage } from '@nodetron/types/world'
import { Color } from '@nodetron/types/enum';

const initialState: WorldMessage = {
    field: {
        width: 6,
        length: 9,
        boundaryWidth: 0.05,
        centerMark: {
            center: { x: 0, y: 0 },
            radius: 0.5
        },
        goal: {
            width: 1.0,
            depth: 0.2,
        },
        penalty: {
            width: 2.0,
            depth: 1.0,
        },
    },
    robots: {
        allies: [],
        opponents: []
    },
    ball: {
        position: { x: 0, y: 0 },
        radius: 0.025
    },
    color: Color.YELLOW
};

export const DataSlice = createSlice({
    name: 'ball',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<WorldMessage>) => {
            state.field = action.payload.field
            state.ball = action.payload.ball
            state.robots = action.payload.robots

        }
    }
})

export const { update } = DataSlice.actions;

export const selectData = (state: RootState) => state.data;

export const selectBall = (state: RootState) => state.data.ball;
export const selectField = (state: RootState) => state.data.field;
export const robotsAllies = (state: RootState) => state.data.robots.allies
export const robotsOpponent = (state: RootState) => state.data.robots.opponents;


export default DataSlice.reducer;