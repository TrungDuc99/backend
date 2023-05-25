import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CategoryDoc extends Document {
  name: string
  description: string
  image: string
  created: Date
  updated: Date
}

const CategorySchema = new Schema<CategoryDoc>({
  name: defaultType.string,
  description: defaultType.string,
  image: defaultType.string,
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default CategorySchema
