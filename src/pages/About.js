import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export default function About() {
   const handleClick=useNavigate();

    return (
        <>
            <Navbar />
            <h1> Currently we are in About page</h1>
            <button onClick={() => handleClick('/list')}>click</button>
        </>
    )
}
