const precosCarrinho: number[] = [20, 40.5, 1.5, 10, 8]

const minimoParaDesconto: number = 70;

const desconto: number = 0.1;

let resultado: number = 0;

for (let i = 0; i < precosCarrinho.length; i++) {
   resultado += precosCarrinho[i]
}

if (resultado >= minimoParaDesconto) {
    console.log(resultado - resultado * desconto);     
} else {
    console.log(resultado);
    
}


