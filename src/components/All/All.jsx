import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../../redux/mediaSlice";
import MediaItem from "../mediaItem/MediaItem";
export default function All() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi({ type: "", game: "" }))
    }, [])
    return (
        <Fragment>
            <MediaItem />
        </Fragment>
    );
}
