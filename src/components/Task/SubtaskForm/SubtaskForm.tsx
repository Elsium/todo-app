import React from 'react'
import AddSubtask from '@/components/Task/SubtaskForm/AddSubtask/AddSubtask'
import SubtaskItem from '@/components/Task/SubtaskForm/SubtaskItem/SubtaskItem'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'

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
            <ul className='flex flex-col gap-[5px]'>
                {subtasks && subtasks.map(subtask => <SubtaskItem key={subtask.id} subtask={subtask} todoId={todoId}/>)}
            </ul>
        </div>
    )
}

export default SubtaskForm