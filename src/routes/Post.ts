import { Router } from 'express'

import { authenticateToken } from '../middleware/AuthenticateToken'
import PostCallback from '../controller/Post'
const PostRouter = Router()

PostRouter.get('/', authenticateToken, PostCallback.get)
PostRouter.post('/', authenticateToken, PostCallback.create)
PostRouter.put('/', authenticateToken, PostCallback.update)
PostRouter.delete('/:id', authenticateToken, PostCallback.delete)
PostRouter.get('/:id', authenticateToken, PostCallback.getOne)
export default PostRouter
