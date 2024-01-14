import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  //let counter = 5;

  const addValue = () => {
    //counter += 1;
    setCounter(counter === 10 ? counter : counter) // can also increment the value here 
    /*
      setCounter(counter++)
      1. Asynchronous State Updates:
      + setCounter doesn't update the state immediately. It schedules a state update, which happens asynchronously.
T     + his means the value of counter might not reflect the update in the subsequent lines of code within the same function.

      2. Postfix Increment (counter++):
      +  The postfix increment operator captures the current value of counter before incrementing it.
      +  In this case, it captures the original value (e.g., 0), and then the increment happens, but the captured value is used for the state update.
    */

    console.log("Value add", Math.random(), counter);
  };

  const removeValue = () => {
    //counter -= 1;   
    setCounter(counter === 0 ? counter: --counter) // can also decrement the value here 
    console.log("Value remove", Math.random(), counter);
  }



  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button> 
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
