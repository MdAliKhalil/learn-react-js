// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ArrayMapping from "./ArrayMapping"
import CheckBoxes from "./Checkboxes"
import ClockColor from "./ClockColor"
import ConditionalRenderingExercise from "./ConditionalRenderingExercise"
import ControlledComponent from "./ControlledComponent"
import Counter from "./Counter"
import DefaultProps from "./DefaultProps"
import JSXExercise from "./JSX Exercise"
import LoginForm from "./LoginForm"
import ObjectAsProps from "./ObjectAsProps"
import PassJSXWithProps from "./PassJSXWithProps"
import ReuseComponentInLoop from "./ReuseComponentInLoop"
import SpreadOperator from "./SpreadOperator"
import StateManagement from "./StateManagement"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </p> */}

      <Counter />
      <JSXExercise />
      <StateManagement />
      <ConditionalRenderingExercise />
      <ObjectAsProps />
      <DefaultProps />
      <PassJSXWithProps />
      <LoginForm />
      <ControlledComponent />
      <CheckBoxes />
      <SpreadOperator />
      <ArrayMapping />
      <ReuseComponentInLoop />
      <ClockColor />
    </>
  )
}

export default App
