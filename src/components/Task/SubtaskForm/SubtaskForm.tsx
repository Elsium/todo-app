import React from 'react'
import AddSubtask from '@/components/Task/SubtaskForm/AddSubtask/AddSubtask'
import SubtaskItem from '@/components/Task/SubtaskForm/SubtaskItem/SubtaskItem'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface PropsType {
    todoId: number
}

const SubtaskForm = ({todoId}: PropsType) => {

    const subtasks = useSelector((state: RootState) =>
        state.todoData.todos.find(t => t.id === todoId)?.subtasks || []
    )

    return (
        <div>
            <AddSubtask todoId={todoId}/>
            <OverlayScrollbarsComponent>
                <ul className='flex flex-col gap-[1px] md:gap-[5px] max-h-[180px] md:max-h-[200px]'>
                    {subtasks && subtasks.map(subtask => <SubtaskItem key={subtask.id} subtask={subtask} todoId={todoId}/>)}
                </ul>
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default SubtaskForm