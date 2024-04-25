const fila = ["Guilda", "João", "Maria", "Pedro", "Joana", "Ana"]

const pessoas = []

for (let i = 0; i < fila.length; i++) {
    pessoas[i] = {
        nome: fila[i],
        senha: i + 1
    }
}

console.log(pessoas);