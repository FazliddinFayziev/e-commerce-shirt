import React from 'react';
import '../Style/error.css';
import { SiMariadbfoundation } from "react-icons/si";

const Error = () => {
    return (
        <div className='error__page'>
            <div className='error__page__center'>
                <div className='error__center__icon'>
                    <SiMariadbfoundation fontSize={80} />
                </div>
                <p>404</p>
            </div>
        </div>
    )
}

export default Error