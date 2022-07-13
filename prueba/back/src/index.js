const express = require('express')
const app = express()

const PORT = 4000

//Middleware

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next()
})

app.use(express.json())
//db
const datosArray=["prueba"]

//Endpoints
app.post('/register', (req, res) => {

    console.log(req.body)
    const {text} = req.body

    datosArray.push(text)

    res.json({datosArray})

})

app.get('/', (req,res) => {
    res.send(datosArray)
})

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
})