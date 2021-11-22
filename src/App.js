import './App.css'
import { useState } from 'react'
import { createColorScheme } from './utils'
import { Stack } from '@tymate/margaret'

function App() {
  const [color, setColor] = useState('')

  const colorScheme = createColorScheme(color)

  return (
    <div className="App">
      <header className="App-header">
        <label style={{ marginBottom: 20 }}>
          Enter your name:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <Stack>
          <div
            style={{
              backgroundColor: colorScheme?.[50],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[100],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[200],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[300],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[400],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[500],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[600],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[700],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[800],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
          <div
            style={{
              backgroundColor: colorScheme?.[900],
              width: 50,
              height: 50,
              marginRight: 16,
            }}
          ></div>
        </Stack>
      </header>
    </div>
  )
}

export default App
