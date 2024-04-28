import s from './ListItem.module.css'

interface ComponentProps {
    name: string
    color: string
    count?: number
}

const ListItem = ({name, color, count = 3}: ComponentProps) => {

    return (
        <button className={s.btn}>
            <div>
                <div style={{background: color}}/>
                <p>{name}</p>
            </div>
            {!!count && <p>{count}</p>}
        </button>
    )
}

export default ListItem