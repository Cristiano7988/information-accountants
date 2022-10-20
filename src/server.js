const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => request({ url: 'https://www.techmaxsolucoes.com.br/api/method/techmax.routes.reports' }, (error, { statusCode }, body) => (error || statusCode !== 200)
  ? res.status(500).json({ type: 'error', message: error.message })
  : res.json(JSON.parse(body))
));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Port: ${PORT}`));