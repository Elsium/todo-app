import React from 'react'
import {FormikProps} from 'formik'
import style from './TaskForm.module.css'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface PropsType {
    formikTodo: FormikProps<{
        id: number,
        title: string,
        description: string | null,
        list: string,
        dueDate: Date | null,
        tags: number[],
    }>
}

const TaskForm = ({formikTodo}: PropsType) => {

    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)

    return (
        <form onSubmit={formikTodo.handleSubmit} className='flex flex-col gap-[10px]'>
            <input
                type='text' name='title' onChange={formikTodo.handleChange}
                value={formikTodo.values.title} placeholder='Title' required className={style.title}/>
            <OverlayScrollbarsComponent
                element='textarea'
                className={`${style.title} h-[150px] resize-none`}
                name="description"
                onChange={formikTodo.handleChange}
                value={formikTodo.values.description || ''}
                placeholder='Description'/>
            <label className={style.select}>
                <p>List</p>
                <select value={formikTodo.values.list || 'null'} name="list" onChange={formikTodo.handleChange} className={`${style.optional}`}>
                    <option value='null'>List</option>
                    {lists.map(list => <option key={list.id} value={list.id}>{list.name}</option>)}
                </select>
            </label>
            {/*<label className={style.select}>*/}
            {/*    <p>Due date</p>*/}
            {/*</label>*/}
            {/*<label className={style.select}>*/}
            {/*    <p>Tags</p>*/}
            {/*</label>*/}
        </form>
    )
}

export default TaskForm