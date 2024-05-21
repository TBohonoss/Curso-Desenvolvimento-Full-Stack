const professores = [
    { nome: "Guildo", stack: "backend" },
    { nome: "Thiago", stack: "frontend" },
    { nome: "Maria", stack: "backend" },
]

const professoresBackend = professores.filter((professor) => {
    return professor.stack === "backend"
})

console.log(professoresBackend);

const professoresFrontend = professores.filter((professor) => {
    return professor.stack === "frontend"
})

console.log(professoresFrontend);