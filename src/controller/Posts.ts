import { Request, Response } from 'express'
import { PostsModel, UserModel } from '../models'
import { PostsDoc } from '../models/Posts'
require('dotenv').config()

const secretKey: any = process.env.TOKEN_SECRET_KEY

export default class PostsCallback {
  static async get(req: any, res: Response) {
    try {
      const pageNumber = parseInt(req.query.pageNumber) || 0
      const pageSize = parseInt(req.query.pageSize) || 12
      const result: any = {}
      const totalCount = await PostsModel.countDocuments().exec()

      let startIndex = pageNumber * pageSize
      const endIndex = (pageNumber + 1) * pageSize
      result.totalCount = totalCount
      result.currentPage = pageNumber
      result.pageSize = pageSize
      result.totalPages = Math.ceil(totalCount / pageSize)
      if (startIndex > 0) {
        result.previous = {
          pageNumber: pageNumber - 1,
          pageSize: pageSize,
        }
      }
      if (endIndex < (await PostsModel.countDocuments().exec())) {
        result.next = {
          pageNumber: pageNumber + 1,
          pageSize: pageSize,
        }
      }
      result.data = await PostsModel.find()
        .sort('-_id')
        .skip(startIndex)
        .limit(pageSize)
        .exec()
      result.rowsPerPage = pageSize
      return res.json({
        success: true,
        msg: 'Posts Fetched successfully',
        data: result,
      })

      // const payload = await PostsModel.find()
      // return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async getOne(req: Request, res: Response) {
    try {
      const postID = req.params.id
      const payload = await PostsModel.findOne({ _id: postID })
      return res.json({ success: true, data: payload })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async getPostsByUserId(req: Request, res: Response) {
    try {
      const userId = req.params.id
      const payload = await PostsModel.find({ userId: userId })
      return res.json({ success: true, data: { payload } })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const data: PostsDoc = req.body

      // Kiểm tra xem userId đã được cung cấp hay chưa
      if (!data.createBy) {
        // Nếu không, trả về một thông báo lỗi
        return res.status(400).json({ error: 'userId is required' })
      } else {
        const payload = await PostsModel.create({
          ...data,
          countLike: data?.countLike ?? 0,
          countComment: data?.countComment ?? 0,
          countView: data?.countView ?? 0,
        })
        return res.json({ success: true, data: payload })
      }
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const idReq = req.params.id

      const { name, description, image, id, price, category, isActive } = req.body
      if (idReq === id) {
        const payload = await PostsModel.findOneAndUpdate(
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
      const payload = await PostsModel.deleteOne({ _id: postId })

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
      const payload = await PostsModel.create(params)
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
      const payload = await PostsModel.findOneAndUpdate({ _id: id }, params)

      return payload
    } catch (err) {
      console.log(err)
      return false
    }
  }

  static async getGraphQL(params: any) {
    try {
      const { id } = params
      const payload = await PostsModel.findOne({ _id: id })

      return payload
    } catch (err) {
      return false
    }
  }
  static async getAllProductGraphQL(params: any, res: Response) {
    try {
      const payload = await PostsModel.find()
      console.log(payload)

      return res.json({ success: true, data: payload })
    } catch (err) {
      return false
    }
  }
}
