import { Request, Response } from 'express'
import { ProductModel, UserModel } from '../models'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class UserCallback {
  static async createGraphQL(params: any) {
    try {
      console.log(params)

      const payload = await ProductModel.create(params)
      return payload
    } catch (err) {
      console.log(err)
      return false
    }
  }

  static async updateGraphQL(params: any) {
    try {
      console.log(params)
      const { id } = params
      const payload = await ProductModel.findOneAndUpdate({ _id: id }, params)

      return payload
    } catch (err) {
      console.log(err)
      return false
    }
  }

  static async getGraphQL(params: any) {
    try {
      const { id } = params
      const payload = await ProductModel.findOne({ _id: id })

      return payload
    } catch (err) {
      return false
    }
  }
  static async getAllProductGraphQL(params: any, res: Response) {
    try {
      const payload = await ProductModel.find()
      console.log(payload)

      return res.json({ success: true, data: payload })
    } catch (err) {
      return false
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const payload = await ProductModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async getOnlyProduct(req: Request, res: Response) {
    try {
      console.log(req.params)
      const productID = req.params.id
      const payload = await ProductModel.findOne({ _id: productID })
      return res.json({ success: true, data: { ...payload, adsasd: 'qweqwe' } })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const { name, description, image, show, price, category, isActive } = req.body
      const payload = await ProductModel.create({
        name,
        description,
        image,
        show,
        price,
        category,
        isActive,
      })
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async update(req: Request, res: Response) {
    try {
      //   const { id } = req.params
      const { name, description, image, id, price, category, isActive } = req.body
      const payload = await ProductModel.findOneAndUpdate(
        { _id: id },
        { name, description, image, isActive, id, price, category }
      )
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const productID = req.params.id
      const payload = await ProductModel.deleteOne({ _id: productID })
      return { success: true, data: payload }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
