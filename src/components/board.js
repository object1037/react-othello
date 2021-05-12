import Square from './square'
import { useState } from 'react';

const emptyArr = new Array(64)
emptyArr.fill(0)

export default function Board(props) {
  const [cells, setCells] = useState(emptyArr)
  
  function handleCellChange(cell) {
    const cellsCopy = cells.slice()
    cellsCopy[cell] = props.blackIsNext ? 2 : 1
    setCells(cellsCopy)
    props.setBlackIsNext(!props.blackIsNext)
  }
  return (
    <div className="board">
      {cells.map((cell, index) => {
        return (
          <Square cell={cell} index={index} cellChange={handleCellChange} key={index} />
        )
      })}
    </div>
  )
}