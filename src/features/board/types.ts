export type ColumnStatus = 'todo' | 'in-progress' | 'done'

export interface Task {
  id: string,
  title: string,
  description: string,
  status: ColumnStatus,
  priority: 'low' | 'medium' | 'high',
  createdAt: string
}

export interface BoardState {
  tasks: Task[],
  searchQuery: string,
  filterPriority: 'all' | 'low' | 'medium' | 'high'
}