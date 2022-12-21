import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Additional from './Additional';
import Carousel from './Carousel';
import Requirment from './Requirment';
export default function MediaDetails() {
    let { game_id } = useParams();
    let [details, setitemDetails] = useState([]);
    let [images, setimages] = useState([]);
    let [requirement, setrequirement] = useState([]);
    async function fetchApi(_id) {
        const { data } = await axios.request({
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id: _id },
            headers: {
                'X-RapidAPI-Key': '91cc06f888msh3a4bde8db8c2f39p1e9a7ajsndb3d5ec672a1',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        setitemDetails(data);
        setimages(data.screenshots)
        setrequirement(data.minimum_system_requirements);
    }
    useEffect(() => {
        fetchApi(+game_id);
    }, [game_id, images])

    return (
        <Fragment>
            {details.length === undefined ? <div className='row py-5 gx-4 my-5'>
                <div className='col-lg-4 my-5'>
                    <img src={details.thumbnail}
                        className="w-100  rounded shadow api-img"
                        alt=""
                    />
                    <div className='row justify-content-between align-items-center py-3'>
                        <div className='col-2'>
                            <span className='px-2 py-1 bg-secondary text-white rounded'>free</span>
                        </div>
                        <div className='col-10'>
                            <a className='d-inline fw-light me-3 text-black bg-info p-2 w-100 d-block text-center fw-bold  rounded text-decoration-none' href={details.game_url}>PLAY NOW <i className="fas fa-sign-out-alt"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 my-5'>
                    <h2 className='mb-4 h1 text-black'>{details.title}</h2>
                    <h4 className='text-secondary mb-4 fw-bold'> About {details.title}</h4>
                    <p className='text-secondary fw-bold lh-lg my-4'>{details.description.split(" ").splice(0, 100).join(" ")}...</p>
                    <Requirment requirement={requirement} />
                    <h4 className='text-secondary my-4 fw-bold'>{details.title} Screenshots</h4>
                    <Carousel images={images} />
                    <h4 className='text-secondary my-4 fw-bold'>Additional Information</h4>
                    <Additional details={details} />
                </div>
            </div> : <div className="vh-100 d-flex justify-content-center   align-items-center">
                <i className="fas fa-spinner text-black fa-spin fa-4x"></i>
            </div>}



        </Fragment>
    )
}
