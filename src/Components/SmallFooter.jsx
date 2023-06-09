import React from 'react'

const SmallFooter = () => {
    return (
        <>
            <footer>

                {/* footer line */}

                <div className='footer-line-box'>
                    <div className='footer-line'></div>
                </div>

                {/* subscribe text */}

                <div className='subscribe'>
                    <h3>SUBSCRIBE TO OUR NEWLETTER</h3>
                </div>

                {/* subscribe input */}

                <div className='subscribe-container'>
                    <div className='subscribe-input'>
                        <input type="text" placeholder='Your E-mail' />
                        <button>Subscribe</button>
                    </div>
                </div>

                {/* footer // Categories // Content // Social */}

                <div className='footer-container'>

                    {/* Box 1 */}

                    <div className='footer-box'>
                        <p className='main-text'>Categories</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <p>Simple</p>
                                <p>Humble</p>
                                <p>Elegant</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3 */}

                    <div className='footer-box'>
                        <p className='main-text'>Social</p>
                        <div className='last-line'></div>
                        <div className='ul-box'>
                            <div>
                                <p>Instagram</p>
                                <p>Telegram</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* © CopyRight */}

                <div className='copy-right'>
                    <p>copyright © #Hello World 2023 .all rights reserved</p>
                </div>

            </footer>

        </>
    )
}

export default SmallFooter