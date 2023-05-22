import { Router } from 'express'

import UserCallback from '../controller/User'
const UserRouter = Router()

UserRouter.get('/', UserCallback.get)
UserRouter.get('/:id', UserCallback.getOne)
UserRouter.post('/', UserCallback.create)
UserRouter.put('/:id', UserCallback.update)
UserRouter.delete('/:id', UserCallback.delete)

export default UserRouter
