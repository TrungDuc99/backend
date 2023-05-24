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
  createDate: string
  createUpdate: string
}

const CommentSchema = new Schema<CommentDoc>({
  comment: defaultType.string,
  userId: defaultType.string,
  countLikes: defaultType.number,
  countDisLikes: defaultType.number,
  countShare: defaultType.number,
  replyForCommentId: defaultType.string,
  createDate: defaultType.string,
  createUpdate: defaultType.string,
})

export default CommentSchema
