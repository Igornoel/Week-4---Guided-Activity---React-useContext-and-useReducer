import { useReducer, useState, type FormEvent } from 'react'
import { LIGHT_THEME } from '../constants/theme'
import { useTheme } from '../context/ThemeContext'
import { taskReducer } from '../reducers/taskReducer'
import styles from './TaskManager.module.css'

export default function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [task, setTask] = useState('')
  const { theme } = useTheme()

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!task.trim()) return
    dispatch({ type: 'add', payload: task })
    setTask('')
  }

  return (
    <section className={`${styles.container} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <h2>Task Manager</h2>
      <form className={styles.form} onSubmit={addTask}>
        <label htmlFor="new-task">New task</label>
        <div className={styles.entry}>
          <input
            id="new-task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="What needs to be done?"
          />
          <button type="submit" disabled={!task.trim()}>Add task</button>
        </div>
      </form>
      {tasks.length > 0 ? (
        <ul className={styles.list}>
          {tasks.map((item) => (
            <li className={styles.task} key={item.id}>
              <span>{item.text}</span>
              <button type="button" aria-label={`Remove ${item.text}`} onClick={() => dispatch({ type: 'remove', payload: item.id })}>Remove</button>
            </li>
          ))}
        </ul>
      ) : <p className={styles.empty}>No tasks yet. Add one above.</p>}
    </section>
  )
}
