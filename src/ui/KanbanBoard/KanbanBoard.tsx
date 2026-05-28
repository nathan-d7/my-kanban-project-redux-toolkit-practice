import  {type FC, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import Column from "../Column/Column"
import TaskForm from "../../components/TaskForm/TaskForm"
import { IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import style from "./KanbanBoard.module.css"


const KanbanBoard: FC = () => {

  const tasksStore = useAppSelector(state => state.board.tasks)
  const toDoTasks = tasksStore.filter(t => t.status === 'todo')
  const inProgressTasks = tasksStore.filter(t => t.status === 'in-progress')
  const doneTasks = tasksStore.filter(t => t.status === 'done')

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  return (
    <section className={style.boardContainer}>
    
      <div className={style.boardAddTaskBox}>
        <IconButton 
          className="board__boardAddTaskBtn"
          onClick={() => setIsModalOpen(true)}
          sx={{
            '&.MuiIconButton-root': {
              border: '1px solid rgb(255, 204, 0)',
              borderRadius: '8px',
              padding: '6px 8px',
            }
          }}
        >
          <AddIcon 
            className="board__addTaskBtnIcon"
            sx={{
              '&.MuiSvgIcon-root': {
                fontSize: '1.1rem',
                color: '#fff'
              }
            }}
          />
          <span style={{color: '#fff', fontSize: '1rem'}}>Add task</span>
        </IconButton>
      </div>


      <div className={style.boardGrid}>
        <Column title='Backlog' status='todo' tasks={toDoTasks}/>
        <Column title='In Progress' status='in-progress' tasks={inProgressTasks}/>
        <Column title='Done' status='done' tasks={doneTasks}/>
      </div>

      {isModalOpen && <TaskForm onClose={() => setIsModalOpen(false)}/>}
    </section>
  )
}

export default KanbanBoard