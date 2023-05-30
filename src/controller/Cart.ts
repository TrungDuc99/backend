import { CartModel, UserModel } from '../models'

import { Request, Response } from 'express'

require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class CartCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await CartModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { userId, items } = req.body

      const user = await UserModel.findOne({ _id: userId })

      if (user) {
        const payload = await CartModel.create({
          userId,
          items,
        })
        return res.json({ success: true, data: payload })
      } else return res.status(404).json({ success: false, message: 'Not found' })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { _id } = req.params
      const { name, description, category, image, id } = req.body

      const payload = await CartModel.findOneAndUpdate(
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
      const payload = await CartModel.deleteOne({ _id: id })
      if (payload.deletedCount === 0) {
        // Trường hợp không tìm thấy bài đăng cần xóa
        return res.status(404).json({ success: false, message: 'Not found' })
      } else {
        // Trường hợp đã xóa thành công
        return res.json({ success: true, message: 'Successfully deleted' })
      }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
