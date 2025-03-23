import './App.css'
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
import { Route, Routes, Navigate } from "react-router"
import Navbar from "./Navbar/Navbar"
import PageNotFound from "./PageNotFound"
import University from './NestedRouting/University'
import Departments from './NestedRouting/Departments'
import Faculty from './NestedRouting/Faculty'
import Students from './NestedRouting/Students'

function App() {
  const [subject, setSubject] = useState('');

  return (
    <>
      {/* <data.Provider value={subject}>
        <select value={subject} onChange={(event) => setSubject(event.target.value)} style={{ textAlign: 'center', display: 'block', margin: 'auto' }}>
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
          cursor: 'pointer',
          textAlign: 'center',
          display: 'block',
          margin: 'auto'
        }} onClick={() => {
          setSubject('');
        }}>Reset</button> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Counter />}></Route>
          <Route path="/jsx-exercise" element={<JSXExercise />}></Route>
          <Route path="/state-management" element={<StateManagement />}></Route>
          <Route path="/conditional-rendering-exercise" element={<ConditionalRenderingExercise />}></Route>
          <Route path="/object-as-props" element={<ObjectAsProps />}></Route>
          <Route path="/default-props" element={<DefaultProps />}></Route>
          <Route path="/pass-jsx-with-props" element={<PassJSXWithProps />}></Route>
          <Route path="/login-form" element={<LoginForm />}></Route>
          <Route path="/controlled-component" element={<ControlledComponent />}></Route>
          <Route path="/checkboxes" element={<CheckBoxes />}></Route>
          <Route path="/spread-operator" element={<SpreadOperator />}></Route>
          <Route path="/array-mapping" element={<ArrayMapping />}></Route>
          <Route path="/reuse-component-in-loop" element={<ReuseComponentInLoop />}></Route>
          <Route path="/clock-color" element={<ClockColor />}></Route>
          <Route path="/array-nested-looping" element={<ArrayNestedLooping />}></Route>
          <Route path="/use-effect-hook" element={<UseEffectHook />}></Route>
          <Route path="/use-effect-hook-with-return" element={<UseEffectHookWithReturn />}></Route>
          <Route path="/user-card" element={<UserCard />}></Route>
          <Route path="/dynamic-style" element={<DynamicStyle />}></Route>
          <Route path="/use-ref-hook" element={<UseRefHook />}></Route>
          <Route path="/uncontrolled-component" element={<UncontrolledComponent />}></Route>
          <Route path="/forward-ref-parent" element={<ForwardRefParent />}></Route>
          <Route path="/use-form-status-hook" element={<UseFormStatusHook />}></Route>
          <Route path="/use-transition-hook" element={<UseTransitionHook />}></Route>
          <Route path="/derived-state" element={<DerivedState />}></Route>
          <Route path="/lifting-state-up" element={<LiftingStateUp />}></Route>
          <Route path="/update-object-in-state" element={<UpdateObjectInState />}></Route>
          <Route path="/use-action-state-hook" element={<UseActionStateHook />}></Route>
          <Route path="/update-array-in-state" element={<UpdateArrayInState />}></Route>
          <Route path="/use-id-hook" element={<UseIDHook />}></Route>
          <Route path="/fragment-wrapper" element={<FragmentWrapper />}></Route>
          <Route path="/college" element={<College />}></Route>
          <Route path="/toggle" element={<Toggle />}></Route>

          {/* Nested Route */}
          <Route path='/university' element={<University />}>
            <Route path='usa'>
              <Route index element={<Departments />}></Route>
              <Route path='faculty' element={<Faculty />}></Route>
              <Route path='students' element={<Students />}></Route>
            </Route>
          </Route>
        </Route>

        {/* Show 404 on Invalid url */}
        <Route path="/*" element={<PageNotFound />}></Route>

        {/* Redirect to Homepage on invalid url */}
        {/* <Route path='/*' element={<Navigate to='/' />}></Route> */}
      </Routes>
      {/* </data.Provider> */}
    </>
  )
}

export default App