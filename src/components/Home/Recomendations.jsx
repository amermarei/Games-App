import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchApi } from "../../redux/mediaSlice";
export default function Recommendations() {
    let { getMovie } = useSelector(state => state.movie);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi({ type: "sort-by", game: "popularity" }))
    }, [])
    return (
        <Fragment>
            <div className="pt-4">
                <h2 className="text-center fw-bold text-muted">Personalized Recommendations</h2>
                {getMovie.length > 0 ? <div className="row g-4 py-4">
                    {getMovie.slice(0, 3).map((movie, index) => {
                        return <Fragment key={index}>
                            <div className='col-lg-4'>
                                <Link className='text-decoration-none text-black' to={`/MediaDetails/${movie.id}`}>
                                    <div className="card">
                                        <img src={movie.thumbnail} className="card-img-top" alt={movie.title}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title.slice(0, 15)}{movie.title.length > 20 ? "..." : ""}</h5>
                                            <p className="card-text">{movie.short_description.slice(0, 25)}...</p>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <i className="fa-solid  fa-plus p-2 rounded d-block"></i>
                                                <div>
                                                    <span className='d-inline fw-light me-3 text-white px-1  genre rounded'>{movie.genre}</span>
                                                    <i className="fa-brands  fa-windows"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Fragment>
                    })}
                </div> : <div className="h-100 mt-5 py-5 d-flex justify-content-center  align-items-center">
                    <i className="fas fa-spinner text-black fa-spin fa-4x"></i>
                </div>}
            </div>
        </Fragment>
    );
}
