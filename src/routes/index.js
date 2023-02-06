import express  from "express"
import contas from "./contasRoutes.js"
import despesas from "./despesasRoutes.js"
import rendas from "./rendasRoutes.js"
import usuarios from "./usuarioRoutes.js"

    

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aula de node"});
    }) 

    app.use(
        express.json(),
        contas,
        usuarios,
        rendas,
        despesas
    )
}

export default routes
