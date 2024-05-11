import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addTodoAndUpload } from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import AddIcon from '@mui/icons-material/Add'
import {AppDispatch} from '@/redux/store'


const AddTodoForm = () => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (accessToken && values.title.length > 0) {
                dispatch(addTodoAndUpload({title: values.title, accessToken}))
                resetForm()
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="mt-[20px] flex items-center border border-gray-300 rounded">
            <button type="submit" className="p-2 outline-none focus:text-[#fed439]">
                <AddIcon/>
            </button>
            <input
                type="text"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                placeholder="Add a new task"
                className="flex-1 p-2 outline-none"
            />
        </form>
    )
}

export default AddTodoForm