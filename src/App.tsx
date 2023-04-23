import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch } from './redux/store';

import List from './components/List';
import { fetchData } from "./components/List/reducer"

function App() {
  // const dispatch = useDispatch<AppDispatch>()
  // // useSelector((state: any) => console.log(state.listReducer.data));
  // useEffect(() => {
  //   async function getdata() {
     
  //     const data = dispatch(fetchData())
  //     // console.log(data) 
  //   }
  //   getdata()
  // }, [])
  return (
    <div className="App">

      <List />
    </div>
  );
}

export default App;
