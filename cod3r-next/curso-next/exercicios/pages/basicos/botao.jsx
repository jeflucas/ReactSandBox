function acao1() {
  console.log("Ação 01");
}

export default function botao() {
  return (
    <div>
      <button onClick={acao1()}>Botão 01</button>
    </div>
  );
}
