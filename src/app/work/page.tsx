'use client'

import Menu from '@/components/Menu/Menu'
import Task from '@/components/Task/Task'
import Table from '@/components/Table/Table'
import {SessionProvider} from 'next-auth/react'
import Session from '@/HOC/Session'
import {useState} from 'react'
import {Todo} from '@/redux/Features/todosSlice'


export default function Work() {

    const [task, setTask] = useState<Todo | null>(null)

    const openTask = (todo: Todo) => {
        setTask(todo)
    }
    const closeTask = () => {
        setTask(null)
    }

    return (
        <SessionProvider>
            <Session>
                <main className="flex px-[40px] py-[20px] min-h-screen gap-[20px]">
                    <Menu/>
                    <Table openTask={openTask}/>
                    {task && <Task todo={task} closeTask={closeTask}/>}
                </main>
            </Session>
        </SessionProvider>
    )
}