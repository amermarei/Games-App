import React, { Fragment } from 'react'

export default function Additional({ details }) {
    return (
        <Fragment>
            <div className='row g-4 '>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Title</p>
                    <p>{details.title}</p>
                </div>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Developer</p>
                    <p>{details.developer}</p>
                </div>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Publisher</p>
                    <p>{details.publisher}</p>
                </div>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Release Date</p>
                    <p>{details.release_date}</p>
                </div>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Genre</p>
                    <p>{details.genre}</p>
                </div>
                <div className='col-4'>
                    <p className=' lead fw-bold text-muted'>Platform</p>
                    <p>{details.platform}</p>
                </div>
            </div>
        </Fragment>
    )
}
