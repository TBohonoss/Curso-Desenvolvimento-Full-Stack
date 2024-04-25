type TProduto = {
    nome: string
    preco: number
    quantidade: number
}

type TCliente = {
    nome: string
    idade: number
    produtos: TProduto[]
} 

const cartaoBohonos: TCliente = {
    nome: "Thiago",
    idade: 33,
    produtos: [
        {
            nome: "Pizza",
            preco: 9500,
            quantidade: 1
        },
        {
           nome: "Refrigerante",
           preco: 500,
           quantidade: 2
        },
        {
            nome: "Pudim",
            preco: 2000,
            quantidade: 3
        }
    ]
}

// console.log(cartaoBohonos);

let total = 0

for (let produto of cartaoBohonos.produtos) {
    total += produto.preco * produto.quantidade
}

console.log(`O total da compra do cliente ${cartaoBohonos.nome} foi de ${total/100} reais`);
