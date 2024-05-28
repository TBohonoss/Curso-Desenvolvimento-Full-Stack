const usuarios = [
    { nome: "João", idade: 23 },
    { nome: "Maria", idade: 18 },
    { nome: "Ana", idade: 30 },
    { nome: "Rodrigo", idade: 17 },
    { nome: "Lucas", idade: 18 },
]

usuarios.sort((elemento1, elemento2) => {
    return elemento1.idade - elemento2.idade
})

console.log(usuarios);

usuarios.sort((elemento1, elemento2) => {
    return elemento2.idade - elemento1.idade
})

console.log(usuarios);