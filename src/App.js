import React, { useState } from 'react';

import { Box } from './styles';

function App() {

  const [number, setNumber] = useState(0)
  const [zeta, setZeta] = useState("")
  const [resultSum, setResultSum] = useState("")

  function Calculate() {
    let value = number
    let fibonacci = new Array()
    let sumFibo = new Array()
    let sum = 0
    let element = 0
    let result = ""

    for(let i=0; ; i++) {
      if(i<2) {
        fibonacci.push(i)
        continue
      }
      element = fibonacci[i-1] + fibonacci[i-2]

      if(element>value) {
        break
      }
      fibonacci.push(element)
    }

    for (let i=fibonacci.length-1; i>=0; i--) {
      if(fibonacci[i]+sum <= value && fibonacci[i]!=0) {
        sum += fibonacci[i]
        sumFibo.push(fibonacci[i])
      }
    }

    for (let i=0; i<=sumFibo.length-1; i++){
      if(sumFibo.length-1 - i == 0) {
        result += `${sumFibo[i]} = ${value}`
    } else {
      result += `${sumFibo[i]} + `
    }
    }
    setZeta("Zeta: "+sumFibo.length)
    setResultSum("Soma: "+result)
  }

  return (
    <Box>
      <div>
        <h1>Calculadora Zeta</h1>
        <input type="number" placeholder= "Digite um valor" onChange={(event) => setNumber(event.target.value)}></input>
        <a onClick={Calculate}>Calcular</a>
        <p>{ resultSum }</p>
        <h2>{ zeta }</h2>
      </div>
    </Box>
  );
}

export default App;