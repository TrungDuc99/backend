import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CartDoc extends Document {
  id: string
  quantity: string
  status: string
  ammount: string
  orderDate: string
}

const CartSchema = new Schema<CartDoc>({})

export default CartSchema
