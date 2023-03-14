const express = require('express')
require('dotenv').config()
const knex = require('./conexao')

const app = express()

app.use(express.json())

app.get('/carros', async (req, res) => {
    try {
        const carros = await knex('carros')
        return res.json(carros)
    } catch (error) {
        return res.json('Erro do servidor')
    }
})



const port = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Servidor startado na porta ${port}`)
})