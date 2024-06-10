import fastify from "fastify";

const servidor =  fastify({
    logger: true
})

servidor.get("/", function controlador (req, res) {
    const saudacao = "Bem vidno ao primeiro servidor Node.js com Typescript"
    return res.send(saudacao)
})

servidor.listen({
    port: 3000
})