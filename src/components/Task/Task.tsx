import React from 'react'
import Title from '@/components/UI/Title'
import TaskForm from '@/components/Task/TaskForm/TaskForm'
import SubtaskForm from '@/components/Task/next/SubtaskForm'
import CloseIcon from '@mui/icons-material/Close'
import TaskAdditional from '@/components/Task/next/TaskAdditional'
import {ITodo} from '@/redux/Features/todosSlice'

interface PropsType {
    todo: ITodo
    closeTask: () => void
}

const Task = ({todo, closeTask}: PropsType) => {
    return (
        <div className='flex flex-col justify-between basis-[500px] min-w-[500px] p-[20px] bg-ground rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task'} Icon={CloseIcon} onClick={() => closeTask()}/>
                <TaskForm todo={todo}/>
                <Title title={'SubTasks:'} Icon={null}/>
                <SubtaskForm subtasks={todo.subtasks}/>
            </div>
            <TaskAdditional todo={todo} closeTask={closeTask}/>
        </div>
    )
}

export default Task