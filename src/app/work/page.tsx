'use client'

import Menu from '@/app/components/Menu/Menu'
import Task from '@/app/components/Task/Task'
import Table from '@/app/components/Table/Table'
import {useEffect} from 'react'
import {fetchAndSetData} from '@/app/redux/Thunks/fetchAndSetData'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/app/redux/store'


export default function Work() {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchAndSetData())
    }, [dispatch])

    return (
        <main className='flex p-[20px] min-h-screen gap-[20px]'>
            <Menu/>
            <Table/>
            <Task/>
        </main>
    )
}