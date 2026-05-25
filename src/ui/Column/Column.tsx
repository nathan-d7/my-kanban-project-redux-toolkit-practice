import type { FC } from "react"
import TaskCard from "../TaskCard/TaskCard"
import type { ColumnStatus }from "../../features/board/types"
import type { Task } from "../../features/board/types"
import style from "./Column.module.css"

type ColumnProps = {
  title: string,
  status: ColumnStatus,
  tasks: Task[]
}


const Column: FC<ColumnProps> = ({title, status, tasks}) => {

  return (
    <div className={style.columnContainer}>
      <h2 className={style.columnTitle}>{title}</h2>
      <div className={style.cardsBox}>
        {tasks.map(t => {
          return <TaskCard key={t.id} task={t} status={status}/>
        })}
      </div>
    </div>
  )

}

export default Column