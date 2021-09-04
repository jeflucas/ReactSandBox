export default function repeticao1() {
  const listaAprovados = [
    "fulano1",
    "fulano2",
    "fulano3",
    "fulano4",
    "fulano5",
    "fulano6",
    "fulano7",
  ];

  function renderizarLista() {
    const itens = [];

    for (let index = 0; index < listaAprovados.length; index++) {
      itens.push(<li key={index}>{listaAprovados[index]}</li>);
    }

    return itens;
  }

  return <ul>{renderizarLista()}</ul>;
}
