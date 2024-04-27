'use client'

import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addList, List} from '@/app/redux/Features/listsSlice'
import {addTag, Tag} from '@/app/redux/Features/tagsSlice'
import {addTodo, Todo} from '@/app/redux/Features/todosSlice'
import {addSticker, Sticker} from '@/app/redux/Features/stickersSlice'
import axios from 'axios'

export const useInitialData = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/data.json')
            .then(response => {
                response.data.lists.forEach((list: List) => dispatch(addList(list)))
                response.data.tags.forEach((tag: Tag) => dispatch(addTag(tag)))
                response.data.todos.forEach((todo: Todo) => dispatch(addTodo(todo)))
                response.data.stickers.forEach((sticker: Sticker) => dispatch(addSticker(sticker)))
            })
            .catch(error => console.error('Error fetching initial data:', error))
    }, [dispatch])
}