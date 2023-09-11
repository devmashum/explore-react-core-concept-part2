import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'



function App() {

  function handleClick() {
    alert('Button clicked')
  }
  const handleClick2 = () => {
    alert('i am working')
  }

  function adToFIve(num) {
    alert(num + 5);
  }

  return (
    <>

      <h3>React Core Concept2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team ></Team>
      <Counter></Counter>
      <button className='button' onClick={handleClick}>one</button>
      <button className='button' onClick={handleClick}>Two</button>
      <button className='button' onClick={() => { alert('3rd option inline function') }}>Three</button>
      <button className='button' onClick={() => { adToFIve(3) }}>Four</button>



    </>
  )
}

export default App
