import { Router } from 'express'

import CategoryCallback from '../controller/Category'
import { authenticateToken } from '../middleware/AuthenticateToken'
const CategoryRouter = Router()

CategoryRouter.get('/', authenticateToken, CategoryCallback.get)
CategoryRouter.post('/', authenticateToken, CategoryCallback.create)
CategoryRouter.put('/:id', authenticateToken, CategoryCallback.update)
CategoryRouter.delete('/:id', authenticateToken, CategoryCallback.delete)

export default CategoryRouter
