import s from './ListItem.module.css'
import {List} from '@/app/redux/Features/listsSlice'

interface ComponentProps {
    list: List
    count: number
    filterTodos: (list: string | undefined) => void
}

const ListItem = ({list, count, filterTodos}: ComponentProps) => {

    return (
        <button onClick={() => filterTodos(list.id.toString())} className={s.btn}>
            <div>
                <div style={{background: list.color}}/>
                <p>{list.name}</p>
            </div>
            {!!count && <p>{count}</p>}
        </button>
    )
}

export default ListItem