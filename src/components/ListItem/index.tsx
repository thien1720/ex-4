import { useState, useRef, ChangeEvent, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchData, fetchDataPage } from '../List/reducer';
import "./style.css"
import { AppDispatch } from '../../redux/store';
import ItemInput from "../ItemInput/index"

export interface LProps {
    id: number,
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string
}
export interface loadReducer {
    data: LProps[],
    error: any,
    loading: boolean
}
export interface Props {
    setDisable(value: boolean): void;
    // hasMore: boolean;
    // setHasMore(value: boolean): void
}

export interface State {
    listReducer: loadReducer

}


function ListItem(props: Props) {
    const { setDisable } = props;
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: State) => {
        // console.log(state)
        return state.listReducer
    });
    const [hasMore, setHasMore] = useState(true);
    const [pageNumber, setPageNumber] = useState(20);

    const getMorePost = async () => {
        console.log("tos")
        setPageNumber(pageNumber + 10)
        await dispatch(fetchDataPage(pageNumber));
        console.log("re")
    };
    return <div className="show-list">
        <ul className="list-group">
            <InfiniteScroll
                dataLength={data.data.length}
                next={getMorePost}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                {data.data.map((item: LProps) => {
                    return <ItemInput
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        url={item.url}
                        setDisable={setDisable}

                    />
                })}

            </InfiniteScroll>
        </ul>
    </div>
}

export default ListItem