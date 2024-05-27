function stringInvertida(palavra: string) {
    const arrayPalavras = palavra.split("")
    let resultado: string = ""  

    for(const letra of arrayPalavras.reverse()) {
        resultado += letra
    }

    console.log(resultado);
    
}

stringInvertida("Thiago Bohonos")
