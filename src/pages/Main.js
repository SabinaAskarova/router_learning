import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export default function Main() {
    const handleClick=useNavigate()
  return (
    <>
    <Navbar/>
    <h1>Currently in main page</h1>
    <button onClick={()=>{
        handleClick("/list")
    }}>click</button>
    </>
  )
}
