import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LProps } from '../ListItem';

interface CounterState {
    data: {};
    dataRe: {}
}


const initialState: CounterState = {
    data: {},
    dataRe: {}
}

export const listSliceIn = createSlice({
    name: 'listIn',
    initialState,
    reducers: {
        addListIn: (state, action) => {
            // console.log(action.payload)
            const newOb = {...state.data, ...action.payload}
            // console.log(newOb)
            state.data = newOb
        },
        addListRe: (state, action) => {
            const newOb = {...state.dataRe, ...action.payload}
            // console.log(newOb)
            state.dataRe = newOb
        }

    }
});

export const { addListIn, addListRe } = listSliceIn.actions;



export default listSliceIn.reducer;
