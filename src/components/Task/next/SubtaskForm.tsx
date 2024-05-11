import {ISubtask} from '@/redux/Features/todosSlice'

interface PropsType {
    subtasks: ISubtask[]
}

const SubtaskForm = ({subtasks}: PropsType) => {
    return (
        <div>
            SubtaskForm <br/><br/>
            {subtasks && subtasks.map(subtask => <div key={subtask.id}>{subtask.title}</div>)}
        </div>
    )
}

export default SubtaskForm