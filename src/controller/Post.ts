import { Request, Response } from 'express'
import { PostModel, ProductModel, UserModel } from '../models'
import { PostDoc } from '../models/Post'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class PostCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await PostModel.find()
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async getOne(req: Request, res: Response) {
    try {
      const postID = req.params.id
      const payload = await PostModel.findOne({ _id: postID })
      return res.json({ success: true, data: { payload } })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const { content, userId, title, topic }: PostDoc = req.body

      // Kiểm tra xem userId đã được cung cấp hay chưa
      if (!userId || userId === '') {
        // Nếu không, trả về một thông báo lỗi
        return res.status(400).json({ error: 'userId is required' })
      }

      const payload = await PostModel.create({
        content,
        userId,
        title,
        topic,
        countView: 0,
      })

      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const idReq = req.params.id

      const { name, description, image, id, price, category, isActive } = req.body
      if (idReq === id) {
        const payload = await PostModel.findOneAndUpdate(
          { _id: id },
          { name, description, image, isActive, id, price, category }
        )
        return res.json({ success: true, data: payload })
      } else return res.status(404).send({ message: 'Mã không trùng khớp' })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const postId = req.params.id
      const payload = await PostModel.deleteOne({ _id: postId })

      if (payload.deletedCount === 0) {
        // Trường hợp không tìm thấy bài đăng cần xóa
        return res.status(404).json({ success: false, message: 'Post not found' })
      } else {
        // Trường hợp đã xóa thành công
        return res.json({ success: true, message: 'Post successfully deleted' })
      }
    } catch (err) {
      // Trường hợp server bị lỗi
      res.status(500).json({ success: false, error: err })
    }
  }

  static async createGraphQL(params: any) {
    try {
      const payload = await PostModel.create(params)
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
      const payload = await PostModel.findOneAndUpdate({ _id: id }, params)

      return payload
    } catch (err) {
      console.log(err)
      return false
    }
  }

  static async getGraphQL(params: any) {
    try {
      const { id } = params
      const payload = await PostModel.findOne({ _id: id })

      return payload
    } catch (err) {
      return false
    }
  }
  static async getAllProductGraphQL(params: any, res: Response) {
    try {
      const payload = await PostModel.find()
      console.log(payload)

      return res.json({ success: true, data: payload })
    } catch (err) {
      return false
    }
  }
}
