import React from 'react'
import { useFormik } from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {addTodoAndUpload, editTodoAndUpload, ITodo} from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import AddIcon from '@mui/icons-material/Add'
import {AppDispatch, RootState} from '@/redux/store'
import {Checkbox} from '@mui/material'
import {useSearchParams} from 'next/navigation'

interface PropsType {
    completedCollapsed: () => void
    areCompletedCollapsed: boolean
}

const AddTodoForm = ({completedCollapsed, areCompletedCollapsed}: PropsType) => {
    const searchParams = useSearchParams()
    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()
    const lists = useSelector((state: RootState) => state.listData.lists)

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: async(data, { resetForm }) => {
            if (accessToken && data.title.length > 0) {
                resetForm()
                const index = lists.findIndex(list => list.name === searchParams.get('list'))
                if (index !== -1) {
                    dispatch(addTodoAndUpload({todo: {title: data.title, list: lists[index]}, accessToken}))
                } else {
                    dispatch(addTodoAndUpload({todo: {title: data.title}, accessToken}))
                }
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    return (
        <div className='mt-[20px] flex justify-between items-center border border-gray-300 rounded px-2'>
            <form onSubmit={formik.handleSubmit} className="flex items-center w-[80%]">
                <button type="submit" className="outline-none focus:text-[#fed439] flex justify-center items-center">
                    <AddIcon className='text-lg'/>
                </button>
                <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Add a new task"
                    className="flex-1 p-2 outline-none text-sm md:text-base"
                />
            </form>
            <label className='flex items-center gap-[2px] md:gap-[10px] border-l border-gray-300'>
                <Checkbox size="small" value={!areCompletedCollapsed} onChange={completedCollapsed}/>
                <p className='font-poppins cursor-pointer text-xs md:text-base'>Completed</p>
            </label>
        </div>
    )
}

export default AddTodoForm