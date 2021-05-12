export default function Label(props) {
  return (
    <div className="label">次は{props.blackIsNext ? "黒" : "白"}の番です</div>
  )
}