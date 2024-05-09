'use client'

import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add'
import {ChromePicker} from 'react-color'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import {useFormik} from 'formik'
import {addListAndUpload} from '@/redux/Features/listsSlice'

const AddButton = () => {
    const [isAdd, setIsAdd] = useState(false)
    const [color, setColor] = useState('#fed439')
    const [openPicker, setOpenPicker] = useState(false)

    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (accessToken && values.name.length > 0) {
                dispatch(addListAndUpload({name: values.name, color, accessToken}))
                resetForm()
                setColor('#fed439')
                setOpenPicker(false)
                setIsAdd(false)
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    return (
        <>
            {isAdd
                ?
                <form onSubmit={formik.handleSubmit} className="w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] relative">
                    <div style={{background: color}} className="w-[20px] h-[20px] rounded"
                        onClick={() => setOpenPicker(!openPicker)}/>
                    {openPicker && <ChromePicker className="absolute top-[30px] left-[5px]" color={color} onChangeComplete={(picker) => {
                        setColor(picker.hex)
                    }}/>}
                    <input onChange={formik.handleChange}
                        name="name"
                        value={formik.values.name}
                        type="text"
                        className="outline-none bg-inherit"/>
                </form>
                : <button onClick={() => setIsAdd(true)}
                    className="w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-listHover">
                    <AddIcon/>
                    <p>Add New List</p>
                </button>
            }
        </>
    )
}

export default AddButton