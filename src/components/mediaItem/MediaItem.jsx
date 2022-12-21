import React, { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { increase } from "../../redux/countSlice";
export default function MediaItem() {
    let { getMovie, loading } = useSelector(state => state.movie);
    let { count } = useSelector(state => state.count);
    let dispatch = useDispatch();
    return (
        <Fragment>
            {loading === false ? <div className='row g-3 py-5 my-5'>
                {getMovie.slice(0, count).map((movie, index) => {
                    return (
                        <Fragment key={index}>
                            <div className='col-md-4 col-lg-3  mb-2'>
                                <Link className='text-decoration-none text-black' to={`/MediaDetails/${movie.id}`}>
                                    <div className="card">
                                        <img src={movie.thumbnail} className="card-img-top" alt={movie.title}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title.slice(0, 15)}{movie.title.length > 20 ? "..." : ""}</h5>
                                            <p className="card-text">{movie.short_description.slice(0, 20)}...</p>
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
                    )

                })}
                <button className='more btn btn-outline-info mx-auto my-auto' onClick={() => dispatch(increase())}>Click To See More</button>
            </div>
                : <div className="vh-100 d-flex justify-content-center  align-items-center">
                    <i className="fas fa-spinner text-black fa-spin fa-4x"></i>
                </div>}
        </Fragment>
    )
}
