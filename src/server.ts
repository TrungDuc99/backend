import express, { Request, Response } from 'express'
import connectDatabase from './utils/connectDatabase'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import {
  AuthRouter,
  CategoryRouter,
  CommentRouter,
  PostsRouter,
  ProductRouter,
  UserRouter,
} from './routes'
import CartRouter from './routes/Cart'
import UserSchema, { UserDoc } from './models/User'
const bodyParser = require('body-parser')
const debug = require('debug')('backend:server')
require('dotenv').config()
// const redis = require('redis')
// const bcrypt = require('bcrypt')
// import UserSchema, { UserDoc } from './models/User'
// const secretKey: any = process.env.TOKEN_SECRET_KEY
// const client = redis.createClient()
const { faker } = require('@faker-js/faker')
// const otpGenerator = require('otp-generator')

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
app.use('/api/posts', PostsRouter)
app.use('/api/comment', CommentRouter)
app.use('/api/cart', CartRouter)
app.use('/api', AuthRouter)

app.listen(PORT, () => {
  console.log(`Server is running at port: http://localhost:${PORT}`)
  debug('Server is up and running on port ', PORT)
})
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
// // Định nghĩa schema và model cho User

const User = mongoose.model('users', UserSchema)

function hashUser() {
  return new Promise((resolve) => {
    const newUser = new User({
      id: faker.string.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      password: faker.internet.password(),
      created: faker.date.past(),
      typeAccount: 0,
      isAdmin: false,
    })
    console.log('====================================')
    console.log(newUser.email, '/', newUser.password)
    console.log('====================================')
    bcrypt.genSalt(10, (err: any, salt: any) => {
      bcrypt.hash(newUser.password, salt, (err: any, hash: any) => {
        if (err) {
          throw err
        }
        newUser.password = hash

        newUser
          .save()
          .then((user: any) => {
            resolve(newUser)
          })
          .catch((err: any) => console.log(err))

        resolve(newUser)
      })
    })
  })
}
export const USERS: UserDoc[] = faker.helpers.multiple(hashUser, {
  count: 5,
})

// export function createRandomPosts(): any {
//   return {
//     id: faker.string.uuid(),
//     name: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatarUrl: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthday: faker.date.birthdate(),
//     created: faker.date.past(),
//     typeAccount: 0,
//     isAdmin: false,
//   }
// }

// // Tạo các đối tượng User giả lập
// const users = [
//   { name: 'John Doe', email: 'johndoe@gmail.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'janesmith@yahoo.com', password: '987654321' },
// ]
// // Thêm dữ liệu giả vào MongoDB
// User.insertMany(USERS)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })
