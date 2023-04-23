import { combineReducers } from '@reduxjs/toolkit';
import listReducer from '../components/List/reducer';
import addListIn from "../components/ItemInput/reducer"
const rootReducer = combineReducers({
  listReducer: listReducer,
  listReducerIN: addListIn,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
