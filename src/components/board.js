import Square from './square'

const initArr = new Array(8)
for (let y = 0; y < 8; y++) {
  initArr[y] = Array(8).fill(0)
}
initArr[3][3] = initArr[4][4] = 1;
initArr[3][4] = initArr[4][3] = 2;

export default function Board(props) {
  let cells = initArr
  
  function validateMove(x, y) {
    if (cells[y][x] !== 0) {
      return false;
    }
    let enemyColor = props.blackIsNext ? 1 : 2;
    let myColor = props.blackIsNext ? 2 : 1;
    let ry, rx;
    for (let ix = -1; ix <= 1; ix++) {
      for (let iy = -1; iy <= 1; iy++) {
        if (y + iy >= 0 && y + iy < 8 && x + ix >= 0 && x + ix < 8) {
          ry = y + iy;
          rx = x + ix;
        } else {
          continue;
        }
        while (cells[ry][rx] === enemyColor) {
          if (ry + iy >= 0 && ry + iy < 8 && rx + ix >= 0 && rx + ix < 8) {
            ry += iy;
            rx += ix;
          } else {
            break;
          }
          if (cells[ry][rx] === myColor) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function flipPieces(x, y) {
    let enemyColor = props.blackIsNext ? 1 : 2;
    let myColor = props.blackIsNext ? 2 : 1;
    let ry, rx;
    for (let ix = -1; ix <= 1; ix++) {
      for (let iy = -1; iy <= 1; iy++) {
        if (y + iy >= 0 && y + iy < 8 && x + ix >= 0 && x + ix < 8) {
          ry = y + iy;
          rx = x + ix;
        } else {
          continue;
        }
        while (cells[ry][rx] === enemyColor) {
          if (ry + iy >= 0 && ry + iy < 8 && rx + ix >= 0 && rx + ix < 8) {
            ry += iy;
            rx += ix;
          } else {
            break;
          }
          if (cells[ry][rx] === myColor) {
            ry -= iy;
            rx -= ix;
            while (ry !== y || rx !== x) {
              flipPiece(rx, ry, myColor)
              ry -= iy;
              rx -= ix;
            }
          }
        }
      }
    }
  }

  function flipPiece(x, y, myColor) {
    cells[y][x] = myColor
  }
  
  function handleCellChange(x, y) {
    if (validateMove(x, y)) {
      flipPieces(x, y)
      flipPiece(x, y, props.blackIsNext ? 2 : 1)
      if (calculateGameEnd()) {
        calculateWinner(props.setWinner)
      }
      props.setBlackIsNext(!props.blackIsNext)
    }
  }

  function calculateGameEnd() {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (cells[y][x] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  function calculateWinner(setWinner) {
    let blackPoint, whitePoint;
    blackPoint = whitePoint = 0;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (cells[y][x] === 1) {
          whitePoint++;
        } else if (cells[y][x] === 2) {
          blackPoint++;
        }
      }
    }
    if (whitePoint > blackPoint) {
      setWinner("白")
    } else if (whitePoint < blackPoint) {
      setWinner("黒")
    } else if (whitePoint === blackPoint) {
      setWinner("引き分け")
    }
  }

  return (
    <div className="board">
      {cells.map((row, y) => {
        return row.map((cell, x) => {
          return (
            <Square cell={cell} x={x} y={y} cellChange={handleCellChange} key={`${y}:${x}`} />
          )
        })
      })}
    </div>
  )
}