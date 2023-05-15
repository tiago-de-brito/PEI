const express = require('express');
const app = express();

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao cronograma!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
