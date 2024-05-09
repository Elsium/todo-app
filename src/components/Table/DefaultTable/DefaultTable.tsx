'use client'

import TableTitle from '@/components/UI/TableTitle'
import Todos from '@/components/Table/DefaultTable/Todos/Todos'
import {Todo} from '@/redux/Features/todosSlice'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {useSearchParams} from 'next/navigation'
import AddTodoForm from '@/components/Table/DefaultTable/next/AddTodoForm'

interface PropsType {
    openTask: (task: Todo) => void
}

const DefaultTable = ({openTask}: PropsType) => {
    let todos = useSelector((state: RootState) => state.todoData.todos)
    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)
    let title = 'Today'

    const searchParams = useSearchParams()
    const queryList = searchParams.get('list')
    const queryTag = searchParams.get('tag')

    if (queryList) {
        todos = todos.filter(todo => todo.list === Number(queryList))
        title = lists[lists.findIndex(list => list.id === Number(queryList))].name
    }
    else if (queryTag) {
        todos = todos.filter(todo => todo.tags.includes(Number(queryTag)))
        title = tags[tags.findIndex(tag => tag.id === Number(queryTag))].name
    }

    return (
        <section className='w-full flex flex-col justify-start p-[30px]'>
            <TableTitle title={title} count={todos.length}/>
            <AddTodoForm/>
            <Todos todos={todos} openTask={openTask}/>
        </section>
    )
}

export default DefaultTable