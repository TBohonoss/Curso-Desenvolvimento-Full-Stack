const usuario = {
    nome: "Thiago Bohonos",
    idade: 33,
    altura: 1.75,
    temCNH: true,
    habilidades: ["HTML", "CSS", "JavaScript"]
}

const possuiCNH = usuario.temCNH ? "possui CNH" : "não possui CNH"

console.log(`${usuario.nome} tem ${usuario.idade} anos, ${usuario.altura}m de altura, ${possuiCNH} e as seguintes habilidades:`);
for (let item of usuario.habilidades) {
    console.log(`- ${item}`);
}