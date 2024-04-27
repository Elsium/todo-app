import FillButton from '@/app/components/UI/FillButton/FillButton'
import OutlineButton from '@/app/components/UI/OutlineButton/OutlineButton'

const TaskAdditional = () => {
    return (
        <div className='flex justify-between items-center'>
            <OutlineButton color={'#cbcbcb'} width={'45%'} height={'50px'}  text={'1rem'}>Delete task</OutlineButton>
            <FillButton color={'#fed439'} width={'45%'} height={'50px'}  text={'1rem'}>Save changes</FillButton>
        </div>
    )
}

export default TaskAdditional