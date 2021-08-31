import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas"
      />
      <Titulo
        pequeno={false}
        principal="Página de Login"
        secundario="Informe seu e-mail e senha"
      />
      <Titulo
        pequeno={true}
        principal="Página de Login"
        secundario="Informe seu e-mail e senha"
      />
    </div>
  );
}
