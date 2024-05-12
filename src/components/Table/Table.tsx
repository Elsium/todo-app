import React from 'react'
import DefaultTable from '@/components/Table/DefaultTable/DefaultTable'
import Sticky from '@/components/Table/next/Sticky'
import Upcoming from '@/components/Table/next/Upcoming'
import {ITodo} from '@/redux/Features/todosSlice'
import {Suspense} from 'react'

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