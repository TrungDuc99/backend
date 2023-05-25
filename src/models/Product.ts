import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface ProductDoc extends Document {
  id: string
  name: string
  description: string
  image: string
  isActive: boolean
  price: string
  created: Date
  updated: Date
}

const ProductSchema = new Schema<ProductDoc>({
  name: defaultType.string,
  description: defaultType.string,
  image: defaultType.string,
  isActive: defaultType.boolean,
  price: defaultType.string,
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default ProductSchema
