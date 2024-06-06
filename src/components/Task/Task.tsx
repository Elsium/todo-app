import React from 'react'
import Title from '@/components/UI/Title'
import TaskForm from '@/components/Task/TaskForm/TaskForm'
import SubtaskForm from '@/components/Task/SubtaskForm/SubtaskForm'
import CloseIcon from '@mui/icons-material/Close'
import TaskAdditional from '@/components/Task/TaskAdditional/TaskAdditional'
import {editTodoAndUpload, ITodo} from '@/redux/Features/todosSlice'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {useSession} from 'next-auth/react'
import {useFormik} from 'formik'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import useWindowWidth from '@/util/useWindowWidth'

interface PropsType {
    todo: ITodo
    closeTask: () => void
}

const Task = ({todo, closeTask}: PropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const {data: session} = useSession()
    const accessToken = session?.accessToken
    const lists = useSelector((state: RootState) => state.listData.lists)

    const formikTodo = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            list: todo.list?.id.toString() || 'null',
            dueDate: todo.dueDate ? dayjs(todo.dueDate) : null,
            tags: todo.tags,
        },
        onSubmit: (data) => {
            const updateTodo: Partial<ITodo> = {
                ...data,
                list: lists.find(l => l.id === Number(data.list)),
                dueDate: data.dueDate ? data.dueDate.toISOString() : null
            }
            if (accessToken) dispatch(editTodoAndUpload({todo: updateTodo, accessToken}))
        }
    })

    const width = useWindowWidth()
    let taskClasses: string
    if (width && width <= 768) taskClasses = 'fixed inset-0 z-40 w-screen flex flex-col justify-between p-[20px] bg-ground rounded-xl font-quicksand'
    else taskClasses = 'flex flex-col justify-between min-w-[500px] p-[20px] bg-ground rounded-xl font-quicksand'

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div key={todo.id} className={taskClasses}>
                <div className='w-full flex flex-col gap-[20px]'>
                    <Title title={'Task:'} Icon={CloseIcon} onClick={() => closeTask()}/>
                    <TaskForm formikTodo={formikTodo}/>
                    <Title title={'SubTasks:'} Icon={null}/>
                    <SubtaskForm todoId={todo.id}/>
                </div>
                <TaskAdditional formikSubmit={formikTodo.submitForm} todo={todo} closeTask={closeTask}/>
            </div>
        </LocalizationProvider>
    )
}

export default Task