import express from 'express'
import morgan from 'morgan'
import { router } from './routes.js'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use((req, res, next) => {
    console.log("Middleware Antes")
    next()
    console.log("Middleware Después")
})

app.use(router)

app.get('/', (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => {
    console.log("Servidor iniciado")
    console.log("http://localhost:3000")
} )