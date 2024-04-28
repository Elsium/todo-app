'use client'

import Menu from '@/app/components/Menu/Menu'
import Task from '@/app/components/Task/Task'
import Table from '@/app/components/Table/Table'
import {SessionProvider} from 'next-auth/react'
import Session from '@/app/HOC/Session/Session'


export default function Work() {

    return (
        <SessionProvider>
            <Session>
                <main className="flex p-[20px] min-h-screen gap-[20px]">
                    <Menu/>
                    <Table/>
                    <Task/>
                </main>
            </Session>
        </SessionProvider>
    )
}