const aprovados: string[] = ["12" , "178", "1223", "109", "845", "350", "4302", "1034", "2104", "2011", "4302"]

const numeroInscricao: string = "4302"

let inscricao: boolean = false

for (let i = 0; i < aprovados.length; i++) {
    if (numeroInscricao === aprovados[i]) {
        inscricao = true
        break        
    } 
}

if (inscricao) {
    console.log("APROVADO");    
} else {
    console.log("REPROVADO");    
}


