import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div className='App'>
        <h1>Counter</h1>
        <p className='count'>{count}</p>
        <p>
            <button onClick={() => setCount((count) => count + 1)}>UP</button>
            <button onClick={() => setCount((count) => count =0)}>Reset</button>
            <button onClick={() => setCount((count) => --count)}>DOWN</button>
        </p>
    </div>
  )
}

export default Counter