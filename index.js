const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const dotEnv = require('dotenv').config()
const cors = require('cors')
const crudRespository = require('./database/crudRespository')



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

crudRespository.createConnection()

  app.use('/api/v1/user',require('./routes/userRoutes'))

  app.use('/',(req,res,next) => {
      res.send('<h1>Hello from my node API </h1>')
  })

  const port  = process.env.PORT

  app.listen(port,()=>{
      console.log(`My node api is listening on port ${port}`)
  })