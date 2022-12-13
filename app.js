const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res)=>{
    res.send("Página de login")
})  



app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})

