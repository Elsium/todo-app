import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addTodoAndUpload } from '@/app/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import AddIcon from '@mui/icons-material/Add'
import {AppDispatch} from '@/app/redux/store'


const AddTodoForm: React.FC = () => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (accessToken && values.title.length > 0) {
                dispatch(addTodoAndUpload({title: values.title, accessToken: accessToken}))
                resetForm()
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="flex items-center">
            <button type="submit" className="p-2">
                <AddIcon/>
            </button>
            <input
                type="text"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                placeholder="Add a new task"
                className="flex-1 p-2 border-2 border-gray-300 rounded"
            />
        </form>
    )
}

export default AddTodoForm