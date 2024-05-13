import React from 'react'
import {ITodo} from '@/redux/Features/todosSlice'
import {useFormik} from 'formik'
import style from './TaskForm.module.css'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface PropsType {
    todo: ITodo
}

const TaskForm = ({todo}: PropsType) => {

    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            list: todo.list,
            dueDate: todo.dueDate,
            tags: todo.tags,
            completed: todo.completed,
            subtasks: todo.subtasks
        },
        onSubmit: () => {

        }
    })

    return (
        <form key={todo.id} onSubmit={formik.handleSubmit} className='flex flex-col gap-[10px]'>
            <input
                type='text' name='title' onChange={formik.handleChange}
                value={formik.values.title} placeholder={todo.title} required className={style.title}/>
            <OverlayScrollbarsComponent
                element='textarea'
                options={{
                    scrollbars: { autoHide: 'leave'}
                }}
                className={`${style.title} resize-none h-[150px]`}
                name="description" onChange={formik.handleChange} placeholder='Description'
                value={formik.values.description || ''}>
            </OverlayScrollbarsComponent>
            <label className={style.select}>
                <p>List</p>
                <select name="list" className={`${style.optional}`}>
                    <option value="none" selected={!!todo.list}>List</option>
                    {lists.map(list => <option key={list.id} value={list.id} selected={list.id === todo.list}>{list.name}</option>)}
                </select>
            </label>
            {/*<label className={style.select}>*/}
            {/*    <p>Due date</p>*/}
            {/*    <select name="list" className={`${style.optional}`}>*/}
            {/*        {lists.map(list => <option key={list.id} value={list.id} selected={list.id === todo.list}>{list.name}</option>)}*/}
            {/*    </select>*/}
            {/*</label>*/}
            {/*<label className={style.select}>*/}
            {/*    <p>Tags</p>*/}
            {/*    <select name="list" className={`${style.optional}`}>*/}
            {/*        {lists.map(list => <option key={list.id} value={list.id} selected={list.id === todo.list}>{list.name}</option>)}*/}
            {/*    </select>*/}
            {/*</label>*/}
        </form>
    )
}

export default TaskForm