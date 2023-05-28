import express, { Request, Response } from 'express'
import connectDatabase from './utils/connectDatabase'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import {
  AuthRouter,
  CategoryRouter,
  CommentRouter,
  PostRouter,
  ProductRouter,
  UserRouter,
} from './routes'
import CartRouter from './routes/Cart'
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
app.use('/api/post', PostRouter)
app.use('/api/comment', CommentRouter)
app.use('/api/cart', CartRouter)
app.use('/api', AuthRouter)
app.listen(PORT, () => {
  console.log('Server is running at port:', PORT)
})

const mongoose = require('mongoose')

// Định nghĩa schema và model cho User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})
// https://docs.mongodb.com/manual/crud/
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
// https://binance-docs.github.io/apidocs/spot/en/#change-log
// https://www.npmjs.com/package/jsonwebtoken


// const User = mongoose.model('users', userSchema)

// // Tạo các đối tượng User giả lập
// const users = [
//   { name: 'John Doe', email: 'johndoe@gmail.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'janesmith@yahoo.com', password: '987654321' },
// ]

// // Thêm dữ liệu giả vào MongoDB
// User.insertMany(users)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })

//----------------------------------------------------------------
// Định nghĩa schema và model cho 

// const Cart = mongoose.model('cart', )

// // Tạo các đối tượng User giả lập
// const carts = [
//   { email: 'johndoe@gmail.com',},
//   { email: 'janesmith@yahoo.com' },
// ]

// // Thêm dữ liệu giả vào MongoDB
// Cart.insertMany(carts)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmNjOTZlMDAyYTc0ZGE1NGM1ZGUwOCIsImVtYWlsIjoibmdvY2RpZW5AZ21haWwuY29tIiwibmFtZSI6IkRJ4buCTiBESeG7gE4iLCJwYXNzd29yZCI6IiQyYiQxMCR6WDk5alRFQ3BaUWxRQVh5ZjlqTHB1OUlCYUV5ZHl6MzcvU3FuNUZtL295ci9wTHR4cHBRLiIsInBob25lIjoiMDEyMzQ1Njc4IiwiYWRkcmVzcyI6IjFiLDJjIGhjbSIsIl9fdiI6MH0sImlhdCI6MTY4NDkwMjM4Nn0.L2X2pYdmBpfZR9o6uDrRBehaPjfcw4a_6s_hv20HCvc
