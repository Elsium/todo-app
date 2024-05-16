import React from 'react'
import {Backdrop, CircularProgress} from '@mui/material'

const Loader = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                }}
                open={true}
            >
                <CircularProgress size={80} thickness={4}/>
            </Backdrop>
        </div>
    )
}

export default Loader