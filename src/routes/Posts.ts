import { Router } from 'express'

import { authenticateToken } from '../middleware/AuthenticateToken'
import PostsCallback from '../controller/Posts'
const PostsRouter = Router()

PostsRouter.get('/', authenticateToken, PostsCallback.get)
PostsRouter.post('/', authenticateToken, PostsCallback.create)
PostsRouter.put('/', authenticateToken, PostsCallback.update)
PostsRouter.delete('/:id', authenticateToken, PostsCallback.delete)
PostsRouter.get('/:id', authenticateToken, PostsCallback.getOne)
PostsRouter.get(
  '/postsbyuser/:id',
  authenticateToken,
  PostsCallback.getPostsByUserId
)

export default PostsRouter
