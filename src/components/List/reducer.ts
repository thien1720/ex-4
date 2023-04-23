import { createSlice, PayloadAction, createAsyncThunk ,current} from '@reduxjs/toolkit';
import { LProps } from '../ListItem';

interface CounterState {
    data: LProps[];
    loading: boolean;
    error: string | null;
}


const initialState: CounterState = {
    data: [],
    loading: false,
    error: null,
}

export const listSlice = createSlice({
    name: 'listPhoto',
    initialState,
    reducers: {
        addConfirm: (state, action) => {
            // console.log(current(state))
            // const arrayConfirm = Object.keys(action.payload)
   
            // const newState = state.data.map((item) =>{
            //     // console.log(item.id)
            //     if(arrayConfirm.some(i=>i == item.id.toString())){
            //         const newItem = {...item, title : action.payload[item.id]}
            //         console.log(newItem)                    
            //         return newItem
            //     }else{
            //         return item
            //     }
            // })
            const confirmObj = action.payload;
            const ids = Object.keys(confirmObj);
            
            ids.forEach(id => {
              const index = state.data.findIndex(item => item.id === parseInt(id));
              if (index !== -1) {
                state.data[index].title = confirmObj[id];
              }
            });
            // console.log(newState)
            // return state.data = newState

        },
        addReset: (state, action) => {
            // console.log("reset")
            const confirmObj = action.payload;
            console.log(confirmObj)
            const ids = Object.keys(confirmObj);
             ids.forEach(id => {
                console.log(id)
              const index = state.data.findIndex(item => item.id === parseInt(id));
              if (index !== -1) {
                console.log('reset')
                console.log(state.data[index])
                state.data[index].title = confirmObj[id];
              }
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchData.fulfilled, (state, action) => {

            state.loading = false;
            state.error = null;
            state.data = action.payload;
        }).addCase(fetchDataPage.pending,(state, action) =>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchDataPage.fulfilled,(state, action) =>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        //  addList(state.data, action))
    }
});

export const { addConfirm, addReset} = listSlice.actions;

export const fetchData = createAsyncThunk(
    'listPhoto/fetchData',
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?&_start=1&_end=10`);
        const data = await response.json();
     
        return data;
    }
);

export const fetchDataPage = createAsyncThunk(
    'listPhoto/fetchDataPage',
    async (page: number) => {
        console.log(page);
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?&_start=1&_end=${page}`);
        const data = await response.json();
     
        return data;
    }
);


export default listSlice.reducer;
