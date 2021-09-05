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

  function renderizaComMap() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
  }

  return (
    <div>
      <ul>{renderizaComMap()}</ul>
    </div>
  );
}
