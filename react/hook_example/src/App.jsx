import React, { useEffect, useState } from 'react'

function App() {
    let [count, updateCount]=useState(10)

    function increase(){
        updateCount(count+1)
    }

    function decrease(){
        updateCount(count-1)
    }

    useEffect(()=>{
        console.log("hi i am your phupa"+count)
    },[count])
  return (
    <>

        <h1> {count} </h1>
       <button onClick={()=> increase()}>+</button>
        <button onClick={()=>decrease()}>-</button>
    </>
  )
}

export default App


