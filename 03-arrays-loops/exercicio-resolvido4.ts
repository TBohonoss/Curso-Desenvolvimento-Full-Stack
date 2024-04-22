const usuarios: string[] = ["Maria", "Ana", "João", "Thiago", "Pedro"]

let encontrado: boolean = false;

for (let usuario of usuarios) {
    if (usuario === "João") {
        encontrado = true
        break        
    }
}

if (encontrado) {
    console.log("Encontrado")
} else {
    console.log("Não encontrado");
}