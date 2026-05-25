import { type FC } from "react"
import type { ColumnStatus, Task } from "../../features/board/types"
import { useAppDispatch } from "../../app/hooks"
import { deleteTasks, moveTask } from "../../features/board/boardSlice"
import { IconButton } from "@mui/material"
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt"
import SwipeLeftAltIcon from "@mui/icons-material/SwipeLeftAlt"
import style from "./TaskCard.module.css"

type TaskCardProps = {
  task: Task,
  status: string
}

const TaskCard: FC<TaskCardProps> = ({task, status}) => {

  const handleMoveLeft = () => {
    let nextStatus: ColumnStatus = 'todo'
    if(status === 'done') nextStatus = 'in-progress'
    if(status === 'in-progress') nextStatus = 'todo'

    dispatch(moveTask({id: task.id, newStatus: nextStatus}))
  }

  const handleMoveRight = () => {
    let nextStatus: ColumnStatus = 'done'
    if(status === 'in-progress') nextStatus = 'done'
    if(status === 'todo') nextStatus = 'in-progress'

    dispatch(moveTask({id: task.id, newStatus: nextStatus}))
  }


  const arrowRight = 
    <IconButton 
      size="medium" 
      className="taskcard__arrow-btn"
      onClick={() => handleMoveRight()}
    >
      <SwipeRightAltIcon />
    </IconButton>

  const arrowLeft = 
    <IconButton 
      size="medium" 
      className="taskcard__arrow-btn"
       onClick={() => handleMoveLeft()}
    >
      <SwipeLeftAltIcon/>
    </IconButton>

  const dispatch = useAppDispatch()

  return (
    <div className={style.taskcardContainer}>
      <div className="taskcard__box">
        <h3 className={style.taskcardTitle}>{task.title}</h3>
        <p className={style.taskcardDescr}>{task.description}</p>

        <div className={style.taskcardFooter}>
          <div className={style.taskcardBadge}>{task.priority}</div>
          <div className={style.taskcardCreatedAt}>{task.createdAt}</div>
        </div>

        <div className={style.taskcardControlsBox}>
          <button 
            className={style.taskcardDeleteBtn}
            onClick={() => dispatch(deleteTasks(task.id))}
          >
              &times;
          </button>

          <div className={style.taskcardArrowsBox}>
            {(status !== 'todo') && arrowLeft}
            {(status !== 'done') && arrowRight}
          </div>

        </div>

      </div>
    </div>
  )
}

export default TaskCard