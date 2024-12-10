import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const style = {
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <>
      <div style={style}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Atmecs Technology </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
