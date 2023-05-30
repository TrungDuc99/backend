import { Document, Schema } from 'mongoose'
import defaultType from '../utils/defaultType'

require('dotenv').config()

export interface CartDoc extends Document {
  userId: string
  items: [
    {
      productId: string
      quantity: number
      price: number
      totalPrice: number
    }
  ]
  created: Date
  updated: Date
}

const CartSchema = new Schema<CartDoc>({
  userId: defaultType.requiredString,
  items: [
    {
      productId: defaultType.requiredString,
      quantity: defaultType.number,
      price: defaultType.number,
      totalPrice: defaultType.number,
    },
  ],
  created: defaultType.date_now,
  updated: defaultType.date,
})

export default CartSchema
