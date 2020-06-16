import React from 'react'
import loadingGif from './loading.gif'


function Loading() {
    return (
        <div className='container-fluid min-vh-100 d-flex justify-content-center align-items-center'>
            <div className='row'>
                <img src= {loadingGif} />
            </div>
        </div>
    )
}

export default Loading
