import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
  return (
    <div>
      <Lista>
        <Item conteudo="item Opa" />
      </Lista>
    </div>
  );
}
