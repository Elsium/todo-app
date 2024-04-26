import s from './Tasks.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'

const Tasks = () => {
    return (
        <div className='flex flex-col items-start gap-[5px]'>
            <p className='font-jost font-bold text-xs'>TASKS</p>
            <button className={s.btn}>
                <div>
                    <KeyboardDoubleArrowRightIcon/>
                    <p>Upcoming</p>
                </div>
                <p>5</p>
            </button>
            <button className={s.btn}>
                <div>
                    <ChecklistRtlIcon/>
                    <p>Today</p>
                </div>
                <p>1</p>
            </button>
            <button className={s.btn}>
                <div>
                    <StickyNote2Icon/>
                    <p>Sticky Wall</p>
                </div>
                <p>3</p>
            </button>
        </div>
    )
}

export default Tasks