import { useState, memo, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { State, LProps, loadReducer } from "../ListItem";
import { AppDispatch } from '../../redux/store';
import { addListIn, addListRe } from "./reducer"
import {addConfirm} from "../List/reducer"
import "../ListItem/style.css";

interface setList {
    id: number;
    title: string;
}
interface update {
    id: string;
}

interface LIN {
    data: {}
    dataRe: {}
}
export interface StateIN {
    listReducerIN: LIN
}

interface BInput {
    id: number;
    title: string;
    url: string;
    setDisable: any
}
function ItemInput(props: BInput) {
    const dispatch = useDispatch<AppDispatch>()

    const { id, title, url, setDisable } = props
    const [input, setInput] = useState(title)
    const [initialInputValue, setInitialInputValue] = useState(title);
    const data = useSelector((state: State) => {
        // console.log(state)
        return state.listReducer.data
    });
    const [inputValues, setInputValues] = useState({});
    const [inputValuesRe, setInputValuesRe] = useState({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
        setInputValues({
            ...inputValues,
            [id]: event.target.value
        });
        setInputValuesRe({
            ...inputValuesRe, [id] : initialInputValue
        })
        setDisable()
        // dispatch(addConfirm(inputValues))
    }

    useEffect(() =>{
        dispatch(addListIn(inputValues))
        dispatch(addListRe(inputValuesRe))
    }, [input,title])

    useEffect(() => {
        setInitialInputValue(input);
    }, [data]);

    // console.log(inputValues)
    return <div className="main-item" key={id}>
        <div className="show-img">
            <img src={url} alt={title} />
        </div>
        <div className={`list ${id % 2 == 0 ? "gray" : "white"}`} >
            <input
                value={input}
                onChange={handleInputChange}
            />
            <p>{Date.now()} </p>
        </div>
    </div>
}

export default memo(ItemInput);

