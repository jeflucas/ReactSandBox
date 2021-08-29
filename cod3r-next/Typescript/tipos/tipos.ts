//string

let nome:string = 'João'

console.log(nome)

// numbers

let idade:number = 20;
console.log (idade)

//boolean

let bacana:boolean = true


// tipos explicitos

let minhaIdade: number

minhaIdade = 30

//array

let hobbies: any[] = []

hobbies.push("ler")
hobbies.push("dormir")

console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [10]

//tupla

let endereco: [string, number] = ['Av Tal', 10]

console.log(endereco)

//enum

enum Cor {
    Azul,
    Verde,
    Amarelo
}

let minhaCor: Cor = Cor.Azul

console.log(minhaCor)