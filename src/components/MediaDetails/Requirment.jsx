import React, { Fragment } from 'react'

export default function Requirment({ requirement }) {
    return (
        <Fragment>
            {requirement ?
                <Fragment>
                    <h4 className='text-secondary mb-4 fw-bold'>Minimum System Requirements</h4>
                    <p className='text-secondary mb-4'> Os : {requirement.os}</p>
                    <p className='text-secondary mb-3'>processor : {requirement.processor}</p>
                    <p className='text-secondary mb-3'>memory : {requirement.memory}</p>
                    <p className='text-secondary mb-3'>graphics : {requirement.graphics}</p>
                    <p className='text-secondary mb-3'>storage : {requirement.storage}</p>
                </Fragment>
                : ""
            }
        </Fragment>
    )
}
