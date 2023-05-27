import { Router } from 'express'

import CartCallback from '../controller/Cart'
import { authenticateToken } from '../middleware/AuthenticateToken'
const CartRouter = Router()

CartRouter.get('/', authenticateToken, CartCallback.get)
CartRouter.post('/', authenticateToken, CartCallback.create)
CartRouter.put('/', authenticateToken, CartCallback.update)
CartRouter.delete('/:id', authenticateToken, CartCallback.delete)
// CartRouter.get('/:id', authenticateToken, CartCallback.getOne)
export default CartRouter
