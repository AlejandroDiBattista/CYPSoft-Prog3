import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./datos');


const app = express();
app.use(morgan('dev')) // Middleware
app.use(express.static('public')) // Archivos estaticos
app.use(express.json())
app.use(cookieParser())

let usuarios = []

function crearToken(){
    return Math.random().toString().substring(2)
}

function traerUsuario() {
    let usuario = localStorage.getItem('usuario')
    return usuario ? JSON.parse(usuario) : []
}

app.use((req, res, next) => {
    if (usuarios.length == 0) {
        let data = localStorage.getItem('usuario')
        usuarios = data ? JSON.parse(data) : []
    }
    next()
    localStorage.setItem('usuario', JSON.stringify(usuarios))
})


function validarUsuario(req, res, next){
    // let token = req.get('token')
    let { token="" } = req.cookies
    
    let usuario = usuarios.find(u => u.token == token)
    if (!usuario) {
        res.status(400).send("Usuario no logeado")
        return
    }

    req.usuario = usuario
    next()
}

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})
    
app.post('/registrar', (req, res) => {
    let usuario = req.body

    if (!usuario.username || !usuario.password) {
        res.status(400).send("Faltan datos")
        return
    }
    if (usuario.password.length < 5) {
        res.status(400).send("Contraseña muy corta")
        return
    }

    let existe = usuarios.find(u => u.username == usuario.username)
    if(existe){
        res.status(400).send("El usuario ya existe")
        return
    }
    
    usuarios.push(usuario)
    
    res.send("Usuario registrado")
})

app.put('/login', (req, res) => {
    let {username, password} = req.body

    if (!username || !password) {
        res.status(400).send("Faltan datos")
        return
    }

    let usuario = usuarios.find(u => u.username == username)
    if (usuario && usuario.password == password) {
        let token = crearToken()
        usuario.token = token 
        // res.set('token', token)
     
        res.cookie('token', token)
     
        res.send("Usuario logeado")
    } else {
        res.status(400).send("Usuario o contraseña incorrectos")
        return
    }
})

app.put('/logout', validarUsuario, (req, res) => {
    let usuario = req.usuario
    delete usuario.token

    res.send("Usuario deslogeado")
})

app.get('/info', validarUsuario, (req, res) => {
    let usuario = req.usuario

    res.send(`Hola ${usuario.username} `)
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});	