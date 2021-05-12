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
    const tl2brMoves = [-9, +9]; // top-left to bottom-right
    const tr2blMoves = [-7, +7]; // top-right to bottom-left
    for (let i = 0; i < 2; i++) {
      let horizon = cell + horizonMoves[i];
      let vertical = cell + verticalMoves[i];
      let tl2br = cell + tl2brMoves[i];
      let tr2bl = cell + tr2blMoves[i];
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
      while (cells[tl2br] === enemyColor) {
        tl2br += tl2brMoves[i];
        if (cells[tl2br] === myColor) {
          return true;
        }
      }
      while (cells[tr2bl] === enemyColor) {
        tr2bl += tr2blMoves[i];
        if (cells[tr2bl] === myColor) {
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
    const tl2brMoves = [-9, +9]; // top-left to bottom-right
    const tr2blMoves = [-7, +7]; // top-right to bottom-left
    for (let i = 0; i < 2; i++) {
      let horizon = cell + horizonMoves[i];
      let vertical = cell + verticalMoves[i];
      let tl2br = cell + tl2brMoves[i];
      let tr2bl = cell + tr2blMoves[i];
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
      while (cells[tl2br] === enemyColor) {
        tl2br += tl2brMoves[i];
        if (cells[tl2br] === myColor) {
          tl2br -= tl2brMoves[i];
          while (tl2br !== cell) {
            flipPiece(tl2br, myColor)
            tl2br -= tl2brMoves[i]
          }
        }
      }
      while (cells[tr2bl] === enemyColor) {
        tr2bl += tr2blMoves[i];
        if (cells[tr2bl] === myColor) {
          tr2bl -= tr2blMoves[i];
          while (tr2bl !== cell) {
            flipPiece(tr2bl, myColor)
            tr2bl -= tr2blMoves[i]
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