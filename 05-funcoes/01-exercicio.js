const usuario = {
    nome: "Thiago",
    idade: 33,
    profissão: "Engenheiro Civil",
    altura: 1.75
}

function apresentacao(dadosUsuario) {
    console.log(`Olá! Meu nome é ${dadosUsuario.nome}, sou um jovem de ${dadosUsuario.idade} anos, ${dadosUsuario.altura}m de altura e sou ${dadosUsuario.profissão}`);
}

apresentacao(usuario)