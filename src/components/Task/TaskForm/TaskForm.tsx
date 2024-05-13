import React from 'react'
import {ITodo} from '@/redux/Features/todosSlice'
import {FormikProps, useFormik} from 'formik'
import style from './TaskForm.module.css'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface PropsType {
    initialValues: Partial<ITodo>
    formik: FormikProps<Partial<ITodo>>
}

const TaskForm = ({initialValues, formik}: PropsType) => {

    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)

    return (
        <div className='flex flex-col gap-[10px]'>
            <input
                type='text' name='title' onChange={formik.handleChange}
                value={formik.values.title} placeholder='Title' required className={style.title}/>
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
                <select value={formik.values.list || 'null'} name="list" onChange={formik.handleChange} className={`${style.optional}`}>
                    <option value='null'>List</option>
                    {lists.map(list => <option key={list.id} value={list.name}>{list.name}</option>)}
                </select>
            </label>
            {/*<label className={style.select}>*/}
            {/*    <p>Due date</p>*/}
            {/*</label>*/}
            {/*<label className={style.select}>*/}
            {/*    <p>Tags</p>*/}
            {/*</label>*/}
        </div>
    )
}

export default TaskForm