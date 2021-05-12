export default function Label(props) {
  let labelText;
  if (props.winner === '') {
    labelText = `次は${props.blackIsNext ? "黒" : "白"}の番です`
  } else {
    labelText = `勝者 : ${props.winner}`
  }
  return (
    <div className="label">{labelText}</div>
  )
}