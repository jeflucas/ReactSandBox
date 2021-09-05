export default function SometePar(props) {
  if (props.numero % 2 === 0) {
    return <span>{props.numero}</span>;
  } else {
    return null;
  }
}
