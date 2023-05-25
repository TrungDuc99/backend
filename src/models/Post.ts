import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface PostDoc extends Document {
  content: string
  userId: string
  title: string
  topic: string
  countView: number
  created: Date
  updated: Date
}

const PostSchema = new Schema<PostDoc>({
  content: defaultType.string,
  userId: { ...defaultType.string, required: true },
  title: defaultType.string,
  countView: defaultType.number,
  topic: defaultType.string,
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default PostSchema
