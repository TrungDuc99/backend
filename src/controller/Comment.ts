import { Request, Response } from 'express'
import { ProductModel, UserModel } from '../models'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class CommentCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await ProductModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params
      const payload = await ProductModel.findOne({ _id: id })
      return res.json({ success: true, data: { payload } })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const {
        comment,
        userId,
        postId,
        countLikes,
        replyForCommentId,
        countDisLikes,
        countShare,
      } = req.body
      const payload = await ProductModel.create({
        userId,
        countLikes: 0,
        replyForCommentId,
        countDisLikes: 0,
        countShare: 0,
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
