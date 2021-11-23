import './App.css'
import { useState } from 'react'
import { createColorScheme } from './utils'
import { Stack } from '@tymate/margaret'
import styled from 'styled-components'

const ColorWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
`
const Wrapper = styled(Stack).attrs({ direction: 'column' })`
  margin-right: 32px;
  font-size: 12px;
  padding: 8px;
  border: ${(props) => props.border};
`

function App() {
  const [color, setColor] = useState('')

  const colorScheme = createColorScheme(color)

  return (
    <div className="App">
      <header className="App-header">
        <label style={{ marginBottom: 20 }}>
          Enter your color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <Stack>
          <Wrapper
            border={colorScheme?.[50] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[50]} />
            <p>{colorScheme?.[50]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[100] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[100]} />
            <p>{colorScheme?.[100]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[200] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[200]} />
            <p>{colorScheme?.[200]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[300] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[300]} />
            <p>{colorScheme?.[300]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[400] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[400]} />
            <p>{colorScheme?.[400]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[500] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[500]} />
            <p>{colorScheme?.[500]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[600] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[600]} />
            <p>{colorScheme?.[600]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[700] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[700]} />
            <p>{colorScheme?.[700]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[800] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[800]} />
            <p>{colorScheme?.[800]}</p>
          </Wrapper>
          <Wrapper
            border={colorScheme?.[900] === color ? '1px solid red' : null}
          >
            <ColorWrapper color={colorScheme?.[900]} />
            <p>{colorScheme?.[900]}</p>
          </Wrapper>
        </Stack>
      </header>
    </div>
  )
}

export default App
