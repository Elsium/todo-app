import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadLists} from '@/app/redux/Features/listsSlice'
import {loadTags} from '@/app/redux/Features/tagsSlice'
import {loadTodos} from '@/app/redux/Features/todosSlice'
import {loadStickers} from '@/app/redux/Features/stickersSlice'
import axios from 'axios'

export const useInitialData = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/data.json')
            .then(response => {
                dispatch(loadLists(response.data.lists))
                dispatch(loadTags(response.data.tags))
                dispatch(loadTodos(response.data.todos))
                dispatch(loadStickers(response.data.stickers))
            })
            .catch(error => console.error('Error fetching initial data:', error))
    }, [dispatch])
}