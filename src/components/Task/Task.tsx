import React from 'react'
import Title from '@/components/UI/Title'
import TaskForm from '@/components/Task/TaskForm/TaskForm'
import SubtaskForm from '@/components/Task/SubtaskForm/SubtaskForm'
import CloseIcon from '@mui/icons-material/Close'
import TaskAdditional from '@/components/Task/TaskAdditional/TaskAdditional'
import {editTodoAndUpload, ITodo} from '@/redux/Features/todosSlice'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import {useSession} from 'next-auth/react'

interface PropsType {
    todo: ITodo
    closeTask: () => void
}

const Task = ({todo, closeTask}: PropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    const accessToken = session?.accessToken

    const initialValues: Partial<ITodo> = {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        list: todo.list,
        dueDate: todo.dueDate,
        tags: todo.tags,
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        onSubmit: (data) => {
            if(accessToken) dispatch(editTodoAndUpload({todo: data, accessToken}))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} key={todo.id} className='flex flex-col justify-between basis-[500px] min-w-[500px] p-[20px] bg-ground rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task'} Icon={CloseIcon} onClick={() => closeTask()}/>
                <TaskForm formik={formik} initialValues={initialValues}/>
                <Title title={'SubTasks:'} Icon={null}/>
                <SubtaskForm subtasks={todo.subtasks}/>
            </div>
            <TaskAdditional formik={formik} todo={todo} closeTask={closeTask}/>
        </form>
    )
}

export default Task