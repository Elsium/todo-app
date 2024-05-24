'use client'

import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add'
import s from './AddSticky.module.css'
import CloseIcon from '@mui/icons-material/Close'
import {useFormik} from 'formik'
import {addStickerAndUpload} from '@/redux/Features/stickersSlice'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'

const AddSticky = () => {
    const [addMode, setAddMode] = useState(false)
    const {data: session} = useSession()
    const dispatch = useDispatch<AppDispatch>()
    const accessToken = session?.accessToken
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: (data, {resetForm}) => {
            if (accessToken && data.title.length > 0) {
                dispatch(addStickerAndUpload({title: data.title, description: data.description || null, accessToken}))
                setAddMode(false)
                resetForm()
            }
        }
    })

    return (
        <div className={`w-full h-[400px] shadow bg-gray-200 rounded p-[15px] flex justify-center items-center ${s.box}`}>
            {addMode
                ? <form onSubmit={formik.handleSubmit} className='relative w-full h-full flex flex-col gap-[15px]'>
                    <button
                        type='button'
                        onClick={() => setAddMode(false)}
                        className={`absolute top-[10px] right-[10px] opacity-0 transition-opacity duration-300 ease-linear ${s.btn}`}>
                        <CloseIcon/>
                    </button>
                    <input
                        name='title'
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder='Title'
                        className='text-center self-center font-bold text-3xl font-poppins outline-none bg-inherit'/>
                    <textarea
                        name='description'
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        placeholder='Description'
                        className='h-full text-lg outline-none bg-inherit resize-none'/>
                    <button
                        type='submit'
                        className={`absolute bottom-[10px] right-[10px] rounded px-[10px] 
                        py-[5px] opacity-0 transition-opacity duration-300 
                        ease-linear ${s.btn} hover:bg-gray-400`}>Save</button>
                </form>
                : <button onClick={() => setAddMode(true)} className='bg-gray-300 rounded-full flex justify-center items-center w-[60px] h-[60px] transition-colors duration-300 ease-linear hover:bg-gray-400'>
                    <AddIcon/>
                </button>
            }
        </div>
    )
}

export default AddSticky