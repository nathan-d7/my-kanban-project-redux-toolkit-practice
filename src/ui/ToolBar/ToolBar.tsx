import type { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import style from './ToolBar.module.css'
import { setSearchQuery } from '../../features/board/boardSlice'

const ToolBar: FC = () => {

  const value = useAppSelector(state => state.board.searchQuery)
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    dispatch(setSearchQuery(query))
    
  }

  return (
    <section className={style.toolBarContainer}>
      <div className={style.toolBarBox}>
        <input className={style.toolBarInput} type="text" value={value} onChange={handleInputChange}/>
      </div>
    </section>
  )
} 

export default ToolBar