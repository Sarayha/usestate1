
import { useState, useEffect } from "react";


function Counter (props) {
    const {delta , maxNum, getReset, needToReset , setMaximumNum} = props
    const [count , setCount] = useState(1)

    useEffect (()=>{
        if(needToReset){
            setCount(0)
            getReset(false)   
        }
    },[needToReset, getReset])



    
    function reset (){
        getReset(true)
       // setCount(0)
    
    }

    

    function incr(){
        setCount(
            function(oldCount){ setMaximumNum(oldCount+delta) 
                if (maxNum <= oldCount + delta) return 0;
                     return (oldCount+delta);
                     
                  
            } 
        ) 
        
        console.log(count)
    }

    function decrease(){
        setCount(
            function(oldCount){
                return oldCount - 1
            }
        )
        console.log(count)
    }

    return (
      <div >
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button on onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Click to reset</button>
        <button onClick={decrease}>Click to decrease 1 from counter</button>
        
      </div>
    );
  }
  
  export default Counter;