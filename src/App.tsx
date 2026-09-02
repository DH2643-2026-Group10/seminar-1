import { useState } from 'react'
import './App.css'
import CodeSnippet from './CodeSnippet'
import { ThemeContext } from './ThemeContext'
import ThemeExtra from './ThemeExtra'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  return (

    <div>
      <h1>React Hooks Demo</h1>

      <section>
        <h2>useState</h2>
        <p>
          Lets a component remember a value between renders.
          Calling <code>setCount</code> updates <code>count</code> and
          re-renders the component with the new value.
        </p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <CodeSnippet code={`const [count, setCount] = useState(0)`} />
      </section>

      <section>
        <h2>useContext</h2>
        <p>
          Lets a deeply nested component read a value without it having to be passed as a prop through every level.
        </p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemeContext.Provider value={theme}>
          <ThemeExtra />
        </ThemeContext.Provider>
        <CodeSnippet code={`const theme = useContext(ThemeContext)`} />

      </section>



    </div>

  )
}

export default App
