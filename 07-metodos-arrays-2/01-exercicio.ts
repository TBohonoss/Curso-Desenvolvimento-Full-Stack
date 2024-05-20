const arquivos = ["index.js", "trabalho.doc", "teste.jpeg", "teste.bat"]

const antiVirus = (listaArquivos: string[]) => {
    const resultado = listaArquivos.some((item) => {
        const existeVirus = item.includes(".bat")
        return existeVirus
    })

    if (resultado) {
        console.log("vírus detectado");        
    } else {
        console.log("nenhum vírus encontrado");
        
    }
}

antiVirus(arquivos)