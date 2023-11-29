import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

function App() {
  const[count, setCount]= useState(0)

  useState(() => {
console.log("Mount")
  },[])
  const inc = () => {
    setCount(count+1)
  }
const dec = () => {
  setCount(count-1)
}

  return (
    <div>
      <h1>Counting Data</h1>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default App

