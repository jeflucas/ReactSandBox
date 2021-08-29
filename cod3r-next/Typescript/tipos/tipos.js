"use strict";
//string
var nome = 'João';
console.log(nome);
// numbers
var idade = 20;
console.log(idade);
//boolean
var bacana = true;
// tipos explicitos
var minhaIdade;
minhaIdade = 30;
//array
var hobbies = [];
hobbies.push("ler");
hobbies.push("dormir");
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [10];
//tupla
var endereco = ['Av Tal', 10];
console.log(endereco);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor);
