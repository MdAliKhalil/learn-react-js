// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react"
import ArrayMapping from "./ArrayMapping"
import ArrayNestedLooping from "./ArrayNestedLooping"
import CheckBoxes from "./Checkboxes"
import ClockColor from "./ClockColor"
import ConditionalRenderingExercise from "./ConditionalRenderingExercise"
import College from "./ContextAPI/College"
import { data } from "./ContextAPI/ContextData"
import ControlledComponent from "./ControlledComponent"
import Counter from "./Counter"
import DefaultProps from "./DefaultProps"
import DerivedState from "./DerivedState"
import DynamicStyle from "./DynamicStyle"
import ForwardRefParent from "./ForwardRefParent"
import FragmentWrapper from "./FragmentWrapper"
import JSXExercise from "./JSX Exercise"
import LiftingStateUp from "./LiftingStateUp"
import LoginForm from "./LoginForm"
import ObjectAsProps from "./ObjectAsProps"
import PassJSXWithProps from "./PassJSXWithProps"
import ReuseComponentInLoop from "./ReuseComponentInLoop"
import SpreadOperator from "./SpreadOperator"
import StateManagement from "./StateManagement"
import UncontrolledComponent from "./UncontrolledComponent"
import UpdateArrayInState from "./UpdateArrayInState"
import UpdateObjectInState from "./UpdateObjectInState"
import UseActionStateHook from "./UseActionStateHook"
import UseEffectHook from "./UseEffectHook"
import UseEffectHookWithReturn from "./UseEffectHookWithReturn"
import UseFormStatusHook from "./UseFormStatusHook"
import UseIDHook from "./UseIDHook"
import UserCard from "./UserCard"
import UseRefHook from "./UseRefHook"
import UseTransitionHook from "./useTransitionHook"
import Toggle from "./CustomHook/Toggle"

function App() {
  // const [count, setCount] = useState(0)
  const [subject, setSubject] = useState('');

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
      <ArrayNestedLooping />
      <UseEffectHook />
      <UseEffectHookWithReturn />
      <UserCard />
      <DynamicStyle />
      <UseRefHook />
      <UncontrolledComponent />
      <ForwardRefParent />
      <UseFormStatusHook />
      <UseTransitionHook />
      <DerivedState />
      <LiftingStateUp />
      <UpdateObjectInState />
      <UseActionStateHook />
      <UpdateArrayInState />
      <UseIDHook />
      <FragmentWrapper />
      <data.Provider value={subject}>
        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select a Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Computer">Computer</option>
        </select>
        <button style={{
          marginLeft: '2px',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '50px',
          backgroundColor: '#000000',
          color: '#ffffff',
          cursor: 'pointer'
        }} onClick={() => {
          setSubject('');
        }}>Reset</button>
        <College />
      </data.Provider>
      <Toggle />
    </>
  )
}

export default App
