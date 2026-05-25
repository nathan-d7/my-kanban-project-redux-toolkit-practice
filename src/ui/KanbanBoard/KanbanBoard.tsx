import type { FC } from "react"
import { useAppSelector } from "../../app/hooks"
import Column from "../Column/Column"
import style from "./KanbanBoard.module.css"

const KanbanBoard: FC = () => {

  const tasksStore = useAppSelector(state => state.board.tasks)
  const toDoTasks = tasksStore.filter(t => t.status === 'todo')
  const inProgressTasks = tasksStore.filter(t => t.status === 'in-progress')
  const doneTasks = tasksStore.filter(t => t.status === 'done')
  
  return (
    <section className={style.boardContainer}>
      <div className={style.boardGrid}>
        <Column title='Backlog' status='todo' tasks={toDoTasks}/>
        <Column title='In Progress' status='in-progress' tasks={inProgressTasks}/>
        <Column title='Done' status='done' tasks={doneTasks}/>
      </div>
    </section>
  )
}

export default KanbanBoard