import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  //let counter = 5;

  const addValue = () => {
    
    //setCounter(counter += 1);   // No restriction to the maximum value for incrementing.
    
    // setCounter(counter === 10 ? 10 : ++counter) // Added a restriction to the maximum value for incrementing.
    // setCounter(counter === 10 ? 10 : counter++) // It is incorrect way and cause issue. (refer README.md)
    
    //console.log("Value add", Math.random(), counter);

    /* increment the value by 4 by calling setState 4 times */
    
    // Below code not work due React State Batching Feature
    /* 
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1); 
    
    */
        
    // Below code work
    /*
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    */
      
    
  };

  const removeValue = () => {
    //setCounter(counter -= 1);   // No restriction to the maximum value for decrementing.
    setCounter(counter === 0 ? counter: --counter) // Added a restriction to the maximum value for decrementing.
    //console.log("Value remove", Math.random(), counter);
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
