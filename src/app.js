import express from "express";
import db from "./config/dbConnect.js"
import contas from "./models/Conta.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})


const app = express();

app.use(express.json())

routes(app)

//código omitido

app.get('/contas/:id', (req, res) => {
  let index = buscaConta(req.params.id);
  res.json(contas[index]);
})

app.post('/contas', (req, res) => {
  contas.push(req.body);
  res.status(201).send('Conta foi cadastrado com sucesso')
})

app.put('/contas/:id', (req, res) => {
  let index = buscaConta(req.params.id)
  contas[index].titulo = req.body.titulo
  res.json(contas)
})

app.delete('/contas/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaConta(id);
  contas.splice(index, 1);
  res.send(`Conta ${id} removido com sucesso`);
})

function buscaConta(id) {
  return contas.findIndex(Conta => Conta.id == id)
}

export default app