import Title from '@/app/components/UI/Title/Title'
import CloseIcon from '@mui/icons-material/Close'

const Task = () => {
    return (
        <div className='flex flex-col justify-between w-[900px] p-[20px] bg-[#f4f4f4] rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Task'} Icon={CloseIcon}/>
                <Title title={'SubTasks:'} Icon={null}/>
            </div>
        </div>
    )
}

export default Task