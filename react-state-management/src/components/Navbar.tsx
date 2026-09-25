import { DARK_THEME, LIGHT_THEME } from '../constants/theme'
import { useTheme } from '../context/ThemeContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <span className={styles.brand}>React App</span>
      <button className={styles.toggleButton} onClick={toggleTheme}>
        Switch to {theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME} mode
      </button>
    </nav>
  )
}
