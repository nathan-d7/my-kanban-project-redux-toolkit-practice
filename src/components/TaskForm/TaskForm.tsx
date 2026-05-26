import { type FC, useState } from "react"
import style from "./TaskForm.module.css"
import { IconButton } from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { useAppDispatch } from "../../app/hooks"
import { addTask } from "../../features/board/boardSlice"

const TaskForm: FC = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'low' as 'low' | 'medium' | 'high'
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric'
  }

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    dispatch(addTask(
      {
        id: crypto.randomUUID(),
        ...formData,
        status: 'todo',
        createdAt: new Date().toLocaleDateString('en-US', options)
    }))
  }

  return (
    <div className={style.taskFormContainer}>
     <form 
      className={style.taskFormBox}
      onSubmit={handleSubmit}
    >
      <input 
        className={style.taskFormInput} 
        type='text' 
        placeholder="Заголовок задачи"
        name='title'
        value={formData.title}
        onChange={handleChange}
      />
      <textarea 
        className={style.taskFormDescrp} 
        name="description"
        value={formData.description}
        onChange={handleChange}
      >
      </textarea>

      <div className={style.taskFormBottom}>
        <select 
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option id="low">low</option>
          <option id="medium">medium</option>
          <option id="high">high</option>
        </select>

        <IconButton type='submit'>
          <ControlPointIcon color="info" />
        </IconButton>
      </div>
      
     </form>
    </div>
  )
}

export default TaskForm