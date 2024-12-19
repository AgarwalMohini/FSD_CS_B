import React from 'react'
import {useRef} from 'react'
export const refex = () => {
    const count=useRef(0);
    const a=5
    console.log("object rendering");
    
    function handleaddvalue(){
        count.current++;
        if(count.current==5)
            alert("You hit Button"+count.current+"times")
        console.log("count.current++",count.current)
    }
  return (
    <div>
        <h1>useRef Example</h1>
        <h1>Ref Counter:{count.aurrent}</h1>
        <button onClick={handleaddvalue}>Add Value</button>
    </div>
  )
}
