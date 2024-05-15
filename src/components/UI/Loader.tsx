import React from 'react'
import {CircularProgress} from '@mui/material'

const Loader = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <CircularProgress />
        </div>
    )
}

export default Loader