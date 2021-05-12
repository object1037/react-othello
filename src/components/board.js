let cells = new Array(64)
cells.fill(1)

export default function Board() {
  return (
    <div className="board">
      {cells.map((cell) => {
        let piece = ''
        if (cell === 1) {
          piece = <p className="white-piece">●</p>
        } else if (cell === 2) {
          piece = <p className="black-piece">●</p>
        }
        return (
          <div className="square">{piece}</div>
        )
      })}
    </div>
  )
}