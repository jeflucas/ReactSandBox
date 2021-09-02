export default function EstiloTabuleiro(props) {
  return (
    <>
      <p
        style={{ backgroundColor: (props.fundo = "branco" ? "#fff" : "#000") }}
      >
        Opa
      </p>
    </>
  );
}
