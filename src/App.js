
import './App.css';
import Counter from './Counter';
import { useState } from "react";



function App() {
  const [delta , setDelta] = useState(1)
  const [maxNum , setMax] = useState(1)

  function handleDelta(e){
    //console.log(setDelta(Number(e.target.value)));
    setDelta(Number(e.target.value))

}
function handleMaxNum(e){
  console.log(e)
  setMax(Number(e.target.value))

}
  return (
    <div className="App">
      <h1>UseState</h1>
      <input type="Number" value= {delta} onChange = {handleDelta}/>
      <h2>select the maximum number for the counter</h2>
      <input type="Number" value= {maxNum} onChange = {handleMaxNum}/>
      <Counter delta={delta} maxNum={maxNum}/>
      <Counter delta={delta} maxNum={maxNum}/>


    </div>
  );
}

export default App;
