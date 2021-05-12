import Square from './square'
import { useState } from 'react';

const initArr = new Array(64)
initArr.fill(0)
initArr[27] = initArr[36] = 1;
initArr[28] = initArr[35] = 2;

export default function Board(props) {
  const [cells, setCells] = useState(initArr)
  
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