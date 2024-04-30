import {Subtask} from '@/app/redux/Features/todosSlice'

interface PropsType {
    subtasks: Subtask[]
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