import Square from './square'

const initArr = new Array(64)
initArr.fill(0)
initArr[27] = initArr[36] = 1;
initArr[28] = initArr[35] = 2;

export default function Board(props) {
  let cells = initArr
  
  function validateMove(cell) {
    if (cells[cell] !== 0) return false;
    let enemyColor = props.blackIsNext ? 1 : 2;
    let myColor = props.blackIsNext ? 2 : 1;
    const horizonMoves = [-1, 1];
    const verticalMoves = [-8, 8];
    for (let i = 0; i < 2; i++) {
      let horizon = cell + horizonMoves[i];
      let vertical = cell + verticalMoves[i];
      while (cells[horizon] === enemyColor) {
        horizon += horizonMoves[i];
        if (cells[horizon] === myColor) {
          return true;
        }
      }
      while (cells[vertical] === enemyColor) {
        vertical += verticalMoves[i];
        if (cells[vertical] === myColor) {
          return true;
        }
      }
    }
    return false;
  }

  function flipPieces(cell) {
    let enemyColor = props.blackIsNext ? 1 : 2;
    let myColor = props.blackIsNext ? 2 : 1;
    const horizonMoves = [-1, 1];
    const verticalMoves = [-8, 8];
    for (let i = 0; i < 2; i++) {
      let horizon = cell + horizonMoves[i];
      let vertical = cell + verticalMoves[i];
      while (cells[horizon] === enemyColor) {
        horizon += horizonMoves[i];
        if (cells[horizon] === myColor) {
          horizon -= horizonMoves[i];
          while (horizon !== cell) {
            flipPiece(horizon, myColor)
            horizon -= horizonMoves[i]
          } 
        }
      }
      while (cells[vertical] === enemyColor) {
        vertical += verticalMoves[i];
        if (cells[vertical] === myColor) {
          vertical -= verticalMoves[i];
          while (vertical !== cell) {
            flipPiece(vertical, myColor)
            vertical -= verticalMoves[i]
          }
        }
      }
    }
  }

  function flipPiece(cell, myColor) {
    cells[cell] = myColor
  }
  
  function handleCellChange(cell) {
    if (validateMove(cell)) {
      flipPieces(cell)
      flipPiece(cell, props.blackIsNext ? 2 : 1)
      props.setBlackIsNext(!props.blackIsNext)
    }
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