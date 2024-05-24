import React from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import {useSession} from 'next-auth/react'
import {addSubtaskAndUpload} from '@/redux/Features/todosSlice'
import AddIcon from '@mui/icons-material/Add'

interface PropsType {
    todoId: number
}

const AddSubtask = ({todoId}: PropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    const accessToken = session?.accessToken

    const formikSubtask = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (data,{resetForm}) => {
            if (accessToken && data.title.length > 0) {
                dispatch(addSubtaskAndUpload({todoId, title: data.title, accessToken}))
                resetForm()
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        formikSubtask.handleSubmit(e)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='pb-[10px] mb-[10px] flex items-center gap-[20px] border-b border-gray-300 rounded hover:border-gray-500 focus:border-blue-500 focus:border-2'>
            <button type='submit' className='rounded-full flex justify-center items-center transition-colors duration-300 ease-linear hover:text-blue-400 hover:bg-gray-200 active:bg-gray-300'>
                <AddIcon/>
            </button>
            <input
                type='text'
                className='bg-inherit outline-none w-full'
                name='title'
                onChange={formikSubtask.handleChange}
                value={formikSubtask.values.title}
                placeholder='Add subtask...'/>
        </form>
    )
}

export default AddSubtask