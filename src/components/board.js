import Square from './square'
import { useState } from 'react';

const emptyArr = new Array(64)
emptyArr.fill(0)

export default function Board() {
  const [cells, setCells] = useState(emptyArr)
  function handleCellChange(cell, color) {
    const cellsCopy = cells.slice()
    cellsCopy[cell] = color
    setCells(cellsCopy)
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