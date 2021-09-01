import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <>
      <Estilo numero={2} color="#fff" direita={false} />
      <Estilo numero={-2} color="#000" direita />
    </>
  );
}
