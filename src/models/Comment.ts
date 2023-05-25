import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CommentDoc extends Document {
  comment: string
  userId: string
  postId: string
  countLikes: number
  replyForCommentId: string
  countDisLikes: number
  countShare: number
  created: Date
  updated: Date
}

const CommentSchema = new Schema<CommentDoc>({
  comment: defaultType.string,
  userId: defaultType.string,
  countLikes: defaultType.number,
  countDisLikes: defaultType.number,
  countShare: defaultType.number,
  replyForCommentId: defaultType.string,
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default CommentSchema
