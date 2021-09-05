import lista from "../../data/listaProdutos";

export default function repeticao02() {
  function renderizarLista() {
    return lista.map((produto) => {
      return (
        <tr key={produto.id}>
          <td style={borda}>{produto.id}</td>
          <td style={borda}>{produto.nome}</td>
          <td style={borda}>{produto.preco}</td>
        </tr>
      );
    });
  }

  const borda = {
    border: "1px solid black",
    borderCollapse: "collapse",
  };

  return (
    <div>
      <table style={borda}>
        <thead>
          <tr>
            <th style={borda}>Código</th>
            <th style={borda}>Nome</th>
            <th style={borda}>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLista()}</tbody>
      </table>
    </div>
  );
}
