import express, { Request, Response } from 'express'
import connectDatabase from './utils/connectDatabase'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import { CategoryRouter, ProductRouter, UserRouter } from './routes'
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const PORT = parseInt(<string>process.env.PORT, 10) || 9888

connectDatabase()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// routes api
app.use('/api/user', UserRouter)
app.use('/api/product', ProductRouter)
app.use('/api/category', CategoryRouter)
app.listen(PORT, () => {
  console.log('Server is running at port:', PORT)
})
