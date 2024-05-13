import React, {Suspense} from 'react'
import DefaultTable from '@/components/Table/DefaultTable/DefaultTable'
import Sticky from '@/components/Table/Sticky/Sticky'
import Upcoming from '@/components/Table/Upcoming/Upcoming'
import {ITodo} from '@/redux/Features/todosSlice'

interface PropsType {
    openTask: (task: ITodo) => void
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