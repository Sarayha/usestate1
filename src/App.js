
import './App.css';
import Counter from './Counter';
import { useState } from "react";



function App() {
  const [delta , setDelta] = useState(1)
  const [maxNum , setMax] = useState(10)
  const [reset , setReset] = useState(false)
  const [maximum , setMaximum] = useState(1)

  function handleDelta(e){
    //console.log(setDelta(Number(e.target.value)));
    setDelta(Number(e.target.value))

}
function handleMaxNum(e){
  console.log(e)
  setMax(Number(e.target.value))
}
function getReset(data){
  console.log(data)
  setReset(data)
}
function setMaximumNum(X){
  if(X > maximum){
    setMaximum(X)
  }  
}

  return (
    <div className="App">
      <h1>UseState</h1>
      <input type="Number" value= {delta} onChange = {handleDelta}/>
      <h2>select the maximum number for the counter</h2>
      <input type="Number" value= {maxNum} onChange = {handleMaxNum}/>
      <h3>Maximum value {maximum}</h3>
      <Counter delta={delta} maxNum={maxNum} getReset={getReset} needToReset = {reset} setMaximumNum ={setMaximumNum}/>
      <Counter delta={delta} maxNum={maxNum} getReset={getReset} needToReset = {reset} setMaximumNum ={setMaximumNum}/>


    </div>
  );
}

export default App;
