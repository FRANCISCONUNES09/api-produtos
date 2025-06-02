const express = require('express')
const app = express()
const port = 4057;
const produtosRoutes = require('./src/routes/produtos')

app.use(express.json())
app.use(produtosRoutes)

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})