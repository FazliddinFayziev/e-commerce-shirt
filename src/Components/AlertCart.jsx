import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useGlobalContext } from '../Context/context';

const AlertCart = () => {

    // Global
    const { show, setShow, cartMessage } = useGlobalContext();
    const { type, msg } = cartMessage;

    // Timeout fucntion for alert cart in above

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 2500);
    }, [show])

    return (
        <>
            {/* Alert Card */}
            {show && (
                <Stack className="alert__cart" sx={{ width: '50%', height: '100px' }} spacing={2}>
                    {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
                    {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
                    {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
                    <Alert severity={type}>{msg}</Alert>
                </Stack>
            )}
        </>
    )
}

export default AlertCart