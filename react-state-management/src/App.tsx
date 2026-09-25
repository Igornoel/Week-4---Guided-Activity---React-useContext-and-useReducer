import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="app">
        <h1>Theme Switcher</h1>
        <p>Use the button in the navigation bar to switch themes.</p>
      </main>
    </ThemeProvider>
  )
}

export default App
