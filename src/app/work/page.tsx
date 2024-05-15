'use client'

import Menu from '@/components/Menu/Menu'
import Task from '@/components/Task/Task'
import Table from '@/components/Table/Table'
import {SessionProvider} from 'next-auth/react'
import Session from '@/HOC/Session'
import {useState} from 'react'
import {ITodo} from '@/redux/Features/todosSlice'
import Initial from '@/HOC/Initial'

export default function Work() {

    const [task, setTask] = useState<ITodo | null>(null)

    const openTask = (todo: ITodo) => {
        if (task !== null) setTask(null)
        setTask(todo)
    }
    const closeTask = () => {
        setTask(null)
    }

    return (
        <SessionProvider>
            <Session>
                <Initial>
                    <main className="flex px-[40px] py-[20px] min-h-screen gap-[20px]">
                        <Menu/>
                        <Table openTask={openTask}/>
                        {task && <Task todo={task} closeTask={closeTask}/>}
                    </main>
                </Initial>
            </Session>
        </SessionProvider>
    )
}