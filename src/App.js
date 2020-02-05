import React from 'react';
import {useState} from 'react'

function App() {

  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState()

  const somar = () => {
    const n1 = parseInt(num1)
    const n2 = parseInt(num2)

    setResult( n1 + n2)
  }

  return (
    <div>
      <input type="text" value={num1} onChange={e => setNum1(e.target.value)} /> <br />
      <input type="text" value={num2} onChange={e => setNum2(e.target.value)}/> <br />
      <button className="btn btn-primary" onClick={somar}> Somar </button> <br />
      <input type="text" value={result} />
    </div>
  );
}

export default App;
