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
            dueDate: todo.dueDate,
            tags: todo.tags,
        },
        onSubmit: (data) => {
            const updateTodo: Partial<ITodo> = {
                ...data,
                list: lists.find(l => l.id === Number(data.list))
            }
            if (accessToken) dispatch(editTodoAndUpload({todo: updateTodo, accessToken}))
        }
    })

    return (
        <div key={todo.id} className='flex flex-col justify-between basis-[500px] min-w-[500px] p-[20px] bg-ground rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task:'} Icon={CloseIcon} onClick={() => closeTask()}/>
                <TaskForm formikTodo={formikTodo}/>
                <Title title={'SubTasks:'} Icon={null}/>
                <SubtaskForm todoId={todo.id}/>
            </div>
            <TaskAdditional formikSubmit={formikTodo.submitForm} todo={todo} closeTask={closeTask}/>
        </div>
    )
}

export default Task