import React, { useEffect, useState } from 'react'
import { language } from '../Functions/language'
import { useGlobalContext } from '../Context/context'
import axios from '../api/axios';

const Input = () => {
    const { activeLanguage } = useGlobalContext();

    const [message, setMessage] = useState('');
    const [thank, setThank] = useState(false);

    const botToken = '6251084597:AAG1zPjb46USa7cnT36K8vilom39iKHQ5yc';
    const chatId = '-1001962382834';

    const sendMessage = async () => {
        try {
            await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                params: {
                    chat_id: chatId,
                    text: "Iltimos qilsang, keyin o'chiraman",
                },
            });
            setThank(true)
        } catch (error) {
            setThank(false)
            alert("Please enter your data!")
        }
    }
    return (
        <>
            {
                thank ? (
                    <div style={{ fontWeight: '600', fontSize: '20px' }} className='contact__details__container'>Thank you! We will contact you soon</div>
                ) : (
                    <>
                        <div data-aos="fade-up-right" data-aos-easing="linear"
                            data-aos-duration="1000" className='contact__details__container'>
                            <p>{language(activeLanguage).question}</p>
                        </div>

                        <div data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="1000" className='subscribe-container'>
                            <div className='subscribe-input'>
                                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder={language(activeLanguage).askPlaceholder} />
                                <button onClick={sendMessage}>{language(activeLanguage).send}</button>
                            </div>
                        </div >
                    </>
                )
            }
        </>
    )
}

export default Input