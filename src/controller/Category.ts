import { Request, Response } from 'express'
import { CategoryModel } from '../models'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class UserCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await CategoryModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { name, description, image, id } = req.body

      const payload = await CategoryModel.create({
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

  static async update(req: Request, res: Response) {
    try {
      const { _id } = req.params
      const { name, description, category, image, id } = req.body

      console.log('====================================')
      console.log(_id, name, id)

      const payload = await CategoryModel.findOneAndUpdate(
        { _id: _id },
        { name, description, category, image, id }
      )

      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = req.params.id
      const payload = await CategoryModel.deleteOne({ _id: id })
      return { success: true, data: payload }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}

// https://docs.mongodb.com/manual/crud/
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
// https://binance-docs.github.io/apidocs/spot/en/#change-log
// https://www.npmjs.com/package/jsonwebtoken
