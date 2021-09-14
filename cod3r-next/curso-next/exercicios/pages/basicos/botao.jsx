function acao1() {
  console.log("Ação 01");
}

export default function botao() {
  function acao2() {
    console.log("Ação 02");
  }

  function acao5(e) {
    console.log(e);
  }

  return (
    <div>
      <button onClick={acao1}>Botão 01</button>
      <button onClick={acao2}>Botão 02</button>
      <button
        onClick={function () {
          console.log("Ação 03");
        }}
      >
        Botão 03
      </button>
      <button
        onClick={() => {
          console.log("Ação 04");
        }}
      >
        Botão 04
      </button>
      <button onClick={acao5}>Botão 05</button>
    </div>
  );
}
