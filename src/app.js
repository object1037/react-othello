import React, { useState } from 'react'
import './style.css'
import Board from './components/board'
import Label from './components/label'

function App() {
  const [blackIsNext, setBlackIsNext] = useState(true)
  const [winner, setWinner] = useState('')
  const [move, setMove] = useState(0)
  return (
    <>
    <div className="wrapper">
      <Label blackIsNext={blackIsNext} winner={winner} />
      <Board blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} setWinner={setWinner} move={move} setMove={setMove} />
    </div>
    </>
  );
}

export default App;