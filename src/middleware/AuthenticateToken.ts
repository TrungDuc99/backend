import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const secretKey: any = process.env.TOKEN_SECRET_KEY

interface User {
  id: string
  username: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}

// Middleware để xác thực JWT token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  // try {
  //   const decodedToken = jwt.verify(token, secretKey) as User
  //   req.user = decodedToken
  //   next()
  // } catch (err) {
  //   console.error(err)
  //   return res.status(403).json({ message: 'Forbidden' })
  // }
  jwt.verify(token, secretKey, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403)
    }
    // Kiểm tra thời gian hết hạn của token
    const currentTime = Math.floor(Date.now() / 1000)
    const expirationTime = currentTime + 10 //thời gian hết hạn sau 10 giây
    if (user.exp < expirationTime) {
      return res.status(401).json({ message: 'Token has expired' })
    }
    req.user = user
    next()
  })
}
