// const express = require('express')
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())



app.get('/bajar',  (req, res) => {
    console.log('>>GET /bajar<<', {nombre: 'Juan', edad: 25})   
    res.status(201)
    res.json({ok: true, mensaje: 'Todo bien'})
})

app.post('/subir', (req, res) => {
    let persona = req.body
    res.setHeader("mi-respuesta", "aaa")
    res.json({nombreCompleto: `${persona.nombre} ${persona.apellido}`})
})



export default app