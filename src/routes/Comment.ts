import { Router } from 'express'

import ProductCallback from '../controller/Product'
import { authenticateToken } from '../middleware/AuthenticateToken'
const CommentRouter = Router()

CommentRouter.get('/', authenticateToken, ProductCallback.get)
CommentRouter.post('/', authenticateToken, ProductCallback.create)
CommentRouter.put('/', authenticateToken, ProductCallback.update)
CommentRouter.delete('/:id', authenticateToken, ProductCallback.delete)
CommentRouter.get('/:id', authenticateToken, ProductCallback.getOne)
export default CommentRouter
