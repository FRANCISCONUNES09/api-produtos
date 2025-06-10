const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4057
require('./src/models')
const produtosRoutes = require('./src/routes/produtos')
const usersRoutes = require('./src/routes/users')
const authRoutes = require('./src/routes/auth')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(produtosRoutes)
app.use(usersRoutes)
app.use(authRoutes)

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})