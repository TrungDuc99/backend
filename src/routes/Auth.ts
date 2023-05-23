import { Router } from 'express'

import AuthCallback from '../controller/authController'
const AuthRouter = Router()

AuthRouter.post('/login', AuthCallback.login)
AuthRouter.post('/register', AuthCallback.register)

export default AuthRouter
