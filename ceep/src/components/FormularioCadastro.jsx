import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua mensagem aqui" />
        <button>Salvar</button>
      </form>
    );
  }
}

export default FormularioCadastro;