export default function Square(props) {
  function clickHandler(cell) {
    if (cell !== 0) {
      return;
    } else {
      props.cellChange(props.index, 2)
    }
  }
  let piece = ''
  if (props.cell === 1) {
    piece = <p className="white-piece">●</p>
  } else if (props.cell === 2) {
    piece = <p className="black-piece">●</p>
  }
  return (
    <div className="square" onClick={() => {clickHandler(props.cell)}}>{piece}</div>
  )
}