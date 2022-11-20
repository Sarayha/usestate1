import { useState } from "react";


function Counter() {
    const [count , setCount] = useState(1)
    function reset (){
        setCount(
            function(oldCount){
                return oldCount = 0  
            }
        )
    
    }

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
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
        <button on onClick={incr}>Click to add 1 to Counter</button>
        <button onClick={reset}>Click to reset</button>
        <button onClick={decrease}>Click to decrease 1 from counter</button>
      </div>
    );
  }
  
  export default Counter;