import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface UserDoc extends Document {
  email: string
  name: string
  password: string
  isAdmin: boolean
  phone: string
  address: string
}

const UserSchema = new Schema<UserDoc>({
  email: defaultType.email,
  name: defaultType.string,
  password: defaultType.password,
  phone: defaultType.string,
  address: defaultType.string,
})

export default UserSchema
