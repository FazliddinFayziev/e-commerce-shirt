import React from 'react';
import { SiMariadbfoundation } from "react-icons/si";

const SingleUserError = () => {
    return (
        <div className='single__user__error'>
            <div className='error__page__user'>
                <div className='error__page__center'>
                    <div className='error__center__icon'>
                        <SiMariadbfoundation fontSize={80} />
                    </div>
                    <p>404</p>
                </div>
            </div>
        </div>
    )
}

export default SingleUserError