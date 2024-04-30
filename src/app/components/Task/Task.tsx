import Title from '@/app/components/UI/Title'
import TaskForm from '@/app/components/Task/next/TaskForm'
import SubtaskForm from '@/app/components/Task/next/SubtaskForm'
import CloseIcon from '@mui/icons-material/Close'
import TaskAdditional from '@/app/components/Task/next/TaskAdditional'
import {Todo} from '@/app/redux/Features/todosSlice'

interface PropsType {
    todo: Todo
    closeTask: () => void
}

const Task = ({todo, closeTask}: PropsType) => {
    return (
        <div className='flex flex-col justify-between basis-[500px] min-w-[500px] p-[20px] bg-[#f4f4f4] rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task'} Icon={CloseIcon} onClick={() => closeTask()}/>
                <TaskForm todo={todo}/>
                <Title title={'SubTasks:'} Icon={null}/>
                <SubtaskForm subtasks={todo.subtasks}/>
            </div>
            <TaskAdditional/>
        </div>
    )
}

export default Task