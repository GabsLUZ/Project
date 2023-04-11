import express from 'express';
import cors from 'cors';
import app from './src/app.js';

const server = express();

// Configuração do CORS
server.use(cors());

// Rotas
server.use('/api', app);

// Servidor
const port = process.env.PORT || 7070;
server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});