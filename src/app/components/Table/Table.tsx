import DefaultTable from '@/app/components/Table/DefaultTable/DefaultTable'
import Sticky from '@/app/components/Table/next/Sticky'
import Upcoming from '@/app/components/Table/next/Upcoming'
import {Todo} from '@/app/redux/Features/todosSlice'
import {Suspense} from 'react'

interface PropsType {
    openTask: (task: Todo) => void
}

const Table = ({openTask}: PropsType) => {
    return (
        <Suspense fallback={<div className='m-auto'>Loading...</div>}>
            <div className='w-full'>
                <DefaultTable openTask={openTask}/>
                {/*<Sticky/>*/}
                {/*<Upcoming/>*/}
            </div>
        </Suspense>
    )
}

export default Table