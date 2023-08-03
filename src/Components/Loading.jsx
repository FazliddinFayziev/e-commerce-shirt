import React from 'react';
import "../Style/loading.css";

const Loading = () => {
    return (
        <div className='main-loading'>
            <div className="container-loading">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
            </div>
        </div>
    )
}

export default Loading