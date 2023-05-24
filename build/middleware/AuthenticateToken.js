"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secretKey = process.env.TOKEN_SECRET_KEY;
// Middleware để xác thực JWT token
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers.authorization;
    var token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // try {
    //   const decodedToken = jwt.verify(token, secretKey) as User
    //   req.user = decodedToken
    //   next()
    // } catch (err) {
    //   console.error(err)
    //   return res.status(403).json({ message: 'Forbidden' })
    // }
    jsonwebtoken_1.default.verify(token, secretKey, function (err, user) {
        if (err) {
            return res.sendStatus(403);
        }
        // Kiểm tra thời gian hết hạn của token
        var currentTime = Math.floor(Date.now() / 1000);
        var expirationTime = currentTime + 10; //thời gian hết hạn sau 10 giây
        if (user.exp < expirationTime) {
            return res.status(401).json({ message: 'Token has expired' });
        }
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmNjOTZlMDAyYTc0ZGE1NGM1ZGUwOCIsImVtYWlsIjoibmdvY2RpZW5AZ21haWwuY29tIiwibmFtZSI6IkRJ4buCTiBESeG7gE4iLCJwYXNzd29yZCI6IiQyYiQxMCR6WDk5alRFQ3BaUWxRQVh5ZjlqTHB1OUlCYUV5ZHl6MzcvU3FuNUZtL295ci9wTHR4cHBRLiIsInBob25lIjoiMDEyMzQ1Njc4IiwiYWRkcmVzcyI6IjFiLDJjIGhjbSIsIl9fdiI6MH0sImlhdCI6MTY4NDg5ODI2OX0.EIg9DuLnjx4-6zUSbmHgcnaAvfOx7rx4JJYwvdwuMv0');
