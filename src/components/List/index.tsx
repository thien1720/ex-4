import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem';
import { LProps } from '../ListItem';
import { StateIN } from '../ItemInput';
import { fetchData } from './reducer';
import { AppDispatch } from '../../redux/store';
import { addConfirm, addReset } from "./reducer"

import "./style.css";
export interface Props {
    disabled: boolean;
    setDisable(value: boolean): void;
}

function List() {
    const [disabled, setDisable] = useState(true);
    // const [hasMore, setHasMore] = useState(true);
    // const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: StateIN) => {
        return state.listReducerIN.data
    })
    const dataRe = useSelector((state: StateIN) => {
        // console.log(state.listReducerIN)
        return state.listReducerIN.dataRe
    })


    function handleConfirm() {
        dispatch(addConfirm(data))
    }

    function handleReset() {
        dispatch(addReset(dataRe))
    }
    const setDisableBtn = useCallback(() => {
        setDisable(false)
    }, [disabled])

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <div>
            <div className="show-btn">
                <button className="btn"
                    disabled={disabled}
                    onClick={handleConfirm}
                >Confirm</button>
                <button className="btn"
                    disabled={disabled}
                    onClick={handleReset}

                >Reset</button>
            </div>
            <ListItem setDisable={setDisableBtn}  />
        </div>
    )
}

export default List;


