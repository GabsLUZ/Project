import app from './src/app.js'

const port = process.env.PORT || 7070;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
