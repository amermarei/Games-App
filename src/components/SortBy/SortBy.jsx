import React from 'react'
import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../../redux/mediaSlice";
import MediaItem from '../mediaItem/MediaItem';
export default function SortBy() {
    let { media_type } = useParams();
    let [game, setGame] = useState(media_type)
    let dispatch = useDispatch();
    useEffect(() => {
        setGame(media_type)
        dispatch(fetchApi({ type: "sort-by", game }));
    }, [dispatch, game, media_type])
    return (
        <Fragment>
            <MediaItem />
        </Fragment>
    );
}