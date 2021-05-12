import React, { useState } from 'react'
import './style.css'
import Board from './components/board'
import Label from './components/label'

function App() {
  const [blackIsNext, setBlackIsNext] = useState(true)
  const [winner, setWinner] = useState('')
  return (
    <>
    <div className="wrapper">
      <Label blackIsNext={blackIsNext} winner={winner} />
      <Board blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} setWinner={setWinner} />
    </div>
    </>
  );
}

export default App;