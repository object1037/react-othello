import React, { useState } from 'react'
import './style.css'
import Board from './components/board'
import NextPlayer from './components/label'

function App() {
  const [blackIsNext, setBlackIsNext] = useState(true)
  return (
    <>
    <div className="wrapper">
      <NextPlayer blackIsNext={blackIsNext} />
      <Board blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} />
    </div>
    </>
  );
}

export default App;