'use client'

import Menu from '@/app/components/Menu/Menu'
import Task from '@/app/components/Task/Task'
import Table from '@/app/components/Table/Table'
import {useInitialData} from '@/app/util/hooks/useInitialData'


export default function Work() {
    useInitialData()

    return (
        <main className='flex p-[20px] min-h-screen gap-[20px]'>
            <Menu/>
            <Table/>
            <Task/>
        </main>
    )
}