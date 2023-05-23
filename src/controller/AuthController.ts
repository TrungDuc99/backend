import { Request, Response } from 'express'
import { UserModel } from '../models'
const jwt = require('jsonwebtoken')

require('dotenv').config()
const bcrypt = require('bcrypt')
const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class AuthCallback {
  static async login(req: Request, res: Response) {
    try {
      console.log('============asdasd========================')

      console.log('====================================')
      const { email, password } = req.body

      const user = await UserModel.findOne({ email }) // find the user by email
      if (!user) {
        return res.status(401).send({ message: 'Invalid username or password' }) // return the error message when the user does not exist
      }
      // Kiểm tra password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid username or password' })
      }
      // Tạo JWT token và trả về cho client
      const token = jwt.sign({ id: user._id }, 'secretKey')
      return res.status(200).send({ token })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async register(req: Request, res: Response) {
    try {
      const { email, name, password, phone, address } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
      const payload = await UserModel.create({
        email,
        name,
        hashedPassword,
        phone,
        address,
      })

      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async logout(req: Request, res: Response) {
    try {
      const { name, description, image, id } = req.body

      const payload = await UserModel.create({
        name,
        id,
        description,
        image,
      })
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async me(req: Request, res: Response) {
    const userID = req
    const payload = await UserModel.findOne({ _id: userID })
    if (!payload) {
      return res.status(404).send({ message: 'User not found' })
    }
    return res.send(req)
  }
}

// https://docs.mongodb.com/manual/crud/
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
// https://binance-docs.github.io/apidocs/spot/en/#change-log
// https://www.npmjs.com/package/jsonwebtoken
