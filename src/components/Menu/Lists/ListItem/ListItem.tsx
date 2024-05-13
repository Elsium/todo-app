import React from 'react'
import s from './ListItem.module.css'
import {deleteListAndUpload, IList} from '@/redux/Features/listsSlice'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import CloseIcon from '@mui/icons-material/Close'

interface ComponentProps {
    list: IList
    count: number
    filterTodos: (list: string | undefined) => void
}

const ListItem = ({list, count, filterTodos}: ComponentProps) => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()

    const deleteList = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (accessToken) dispatch(deleteListAndUpload({id: list.id, accessToken}))
    }

    return (
        <button onClick={() => filterTodos(list.name)} className={s.btn}>
            <div className={s.name}>
                <div className={s.color} style={{background: list.color}}/>
                <p>{list.name}</p>
            </div>
            <div className='flex items-center gap-[10px]'>
                {!!count && <p className={s.count}>{count}</p>}
                <button className={s.delete} onClick={(e) => deleteList(e)}>
                    <CloseIcon className='text-xl'/>
                </button>
            </div>
        </button>
    )
}

export default ListItem