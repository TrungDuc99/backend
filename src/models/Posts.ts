import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface PostsDoc extends Document {
  content: string
  createBy: {
    userId: string
    name: string
    avatar: string
  }
  title: string
  image: any[]
  topic: string
  countLike: number
  countComment: number
  countView: number
  description: string
  created: Date
  updated: Date
}

const PostSchema = new Schema<PostsDoc>({
  content: defaultType.string,
  description: defaultType.string,
  createBy: {
    userId: defaultType.requiredString,

    name: defaultType.string,
    avatar: defaultType.string,
  },
  title: defaultType.string,
  image: [],
  countLike: defaultType.number,
  countComment: defaultType.number,
  countView: defaultType.number,
  topic: defaultType.string,
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default PostSchema
