import React from 'react'
import s from './ListItem.module.css'
import {IList} from '@/redux/Features/listsSlice'

interface ComponentProps {
    list: IList
    count: number
    filterTodos: (list: string | undefined) => void
}

const ListItem = ({list, count, filterTodos}: ComponentProps) => {

    return (
        <button onClick={() => filterTodos(list.name)} className={s.btn}>
            <div>
                <div style={{background: list.color}}/>
                <p>{list.name}</p>
            </div>
            {!!count && <p>{count}</p>}
        </button>
    )
}

export default ListItem