import Title from '@/app/components/UI/Title/Title'
import TaskForm from '@/app/components/Task/TaskForm/TaskForm'
import SubtaskForm from '@/app/components/Task/SubtaskForm/SubtaskForm'
import CloseIcon from '@mui/icons-material/Close'
import TaskAdditional from '@/app/components/Task/TaskAdditional/TaskAdditional'

const Task = () => {
    return (
        <div className='flex flex-col justify-between w-[900px] p-[20px] bg-[#f4f4f4] rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task'} Icon={CloseIcon}/>
                <TaskForm/>
                <Title title={'SubTasks:'} Icon={null}/>
                <SubtaskForm/>
            </div>
            <TaskAdditional/>
        </div>
    )
}

export default Task