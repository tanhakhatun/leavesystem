import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
import admin from './user/admin'
// import data from '../data/db.json'
import user from './user/user'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    // e.preventDefault(),
    dispatch(
      user({
        name: name,
        password: password,
        loggedIn: true,
      })
    )
  }
  return (
    <div className='login'>
      <form className='login_form' onSubmit={(e) => handelSubmit(e)}>
        <h1>login Here</h1>
        <input
          type='name'
          placeholder='user or admin'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className='btn'>
          <button type='submit' classname='admin-btn' onClick={(e) => admin()}>
            I'm admin
          </button>
          <button type='submit' className='user-btn' onClick={(e) => user()}>
            I'm user
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
