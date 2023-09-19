require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db')

//config json responde
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)


//save cors
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:5173' }))

//public folder
app.use(express.static('public'))

//rotes
const UserRoutes = require('./routes/UserRoutes')
//const TrainingRoutes = require('./routes/TrainingRoutes')

app.use('/users', UserRoutes)
//app.use('/treining', TrainingRoutes)

app.listen(5000, () => {
  console.log('app no arr na porta 5000')
})