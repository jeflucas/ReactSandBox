/**
 * <div>
 * <span>1, </span> 1 a 10
 * </div>
 */

function criaSpan(fim = 10) {
  const lista = [];
  for (let index = 1; index <= fim; index++) {
    lista.push(<span>{index}, </span>);
  }
  return lista;
}

export default function lista1() {
  return <div>{criaSpan(15)}</div>;
}
