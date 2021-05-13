import React, { useState } from 'react'
import './style.css'
import Board from './components/board'
import Label from './components/label'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [blackIsNext, setBlackIsNext] = useState(true)
  const [winner, setWinner] = useState('')
  const [move, setMove] = useState(0)
  return (
    <>
    <ToastContainer hideProgressBar />
    <div className="wrapper">
      <Label blackIsNext={blackIsNext} winner={winner} />
      <Board blackIsNext={blackIsNext} setBlackIsNext={setBlackIsNext} setWinner={setWinner} move={move} setMove={setMove} />
    </div>
    </>
  );
}

export default App;