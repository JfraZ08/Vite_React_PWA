// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import  HelloWorld  from './HelloWorld'
import './App.css'
import Counter from './counter/Count'
import List from './list/List'
import NameForm from './form/NameForm'
import TodoList from './todolist/TodoList'

function App() {

  return (
    <>
    <HelloWorld />
    <Counter />
    <List />
    <NameForm />
    <TodoList />
    </>
  )
}

export default App
