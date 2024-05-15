import React, {Suspense} from 'react'
import DefaultTable from '@/components/Table/DefaultTable/DefaultTable'
import Sticky from '@/components/Table/Sticky/Sticky'
import Upcoming from '@/components/Table/Upcoming/Upcoming'
import {ITodo} from '@/redux/Features/todosSlice'
import {useSearchParams} from 'next/navigation'

interface PropsType {
    openTask: (task: ITodo) => void
}

const Table = ({openTask}: PropsType) => {
    const searchParams = useSearchParams()
    const sticky = searchParams.get('sticky')
    const upcoming = searchParams.get('upcoming')

    return (
        <Suspense fallback={<div className='m-auto'>Loading...</div>}>
            <div className='w-full'>
                {sticky && <Sticky/>}
                {upcoming && <Upcoming/>}
                {!sticky && !upcoming && <DefaultTable openTask={openTask}/>}
            </div>
        </Suspense>
    )
}

export default Table