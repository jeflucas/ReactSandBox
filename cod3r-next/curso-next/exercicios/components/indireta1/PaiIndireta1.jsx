import FilhoIndireta1 from "./FilhoIndireta1";

export default function PaiIndireta1(props) {
  function falarComigo() {
    console.log("Falar Comigo");
  }
  return (
    <div>
      <h1>Pai Indireta 1</h1>
      <FilhoIndireta1 funcao={falarComigo} />
    </div>
  );
}
