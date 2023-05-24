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
  createDate: string
  categoryId: string
}

const ProductSchema = new Schema<ProductDoc>({
  name: defaultType.string,
  description: defaultType.string,
  image: defaultType.string,
  isActive: defaultType.boolean,
  price: defaultType.string,
  categoryId: defaultType.string,
  createDate: defaultType.string,
})

export default ProductSchema
