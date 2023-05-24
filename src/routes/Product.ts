import { Router } from 'express'

import ProductCallback from '../controller/Product'
import { authenticateToken } from '../middleware/AuthenticateToken'
const ProductRouter = Router()

ProductRouter.get('/', authenticateToken, ProductCallback.get)
ProductRouter.post('/', authenticateToken, ProductCallback.create)
ProductRouter.put('/', authenticateToken, ProductCallback.update)
ProductRouter.delete('/:id', authenticateToken, ProductCallback.delete)
ProductRouter.get('/:id', authenticateToken, ProductCallback.getOne)
export default ProductRouter
