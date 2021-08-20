import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userslice'
import Login from './comonents/login'
import User from './comonents/user/user'

function App() {
  const user = useSelector(selectUser)

  return <div>{user ? <User /> : <Login />}</div>
}

export default App
