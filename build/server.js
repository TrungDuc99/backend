"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connectDatabase_1 = __importDefault(require("./utils/connectDatabase"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var Cart_1 = __importDefault(require("./routes/Cart"));
var bodyParser = require('body-parser');
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = parseInt(process.env.PORT, 10) || 9888;
(0, connectDatabase_1.default)();
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// routes api
app.use('/api/user', routes_1.UserRouter);
app.use('/api/product', routes_1.ProductRouter);
app.use('/api/category', routes_1.CategoryRouter);
app.use('/api/post', routes_1.PostRouter);
app.use('/api/comment', routes_1.CommentRouter);
app.use('/api/cart', Cart_1.default);
app.use('/api', routes_1.AuthRouter);
app.listen(PORT, function () {
    console.log('Server is running at port:', PORT);
});
var mongoose = require('mongoose');
// Định nghĩa schema và model cho User
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
// const User = mongoose.model('users', userSchema)
// // Tạo các đối tượng User giả lập
// const users = [
//   { name: 'John Doe', email: 'johndoe@gmail.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'janesmith@yahoo.com', password: '987654321' },
// ]
// // Thêm dữ liệu giả vào MongoDB
// User.insertMany(users)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })
//----- Token Authentication -------
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmNjOTZlMDAyYTc0ZGE1NGM1ZGUwOCIsImVtYWlsIjoibmdvY2RpZW5AZ21haWwuY29tIiwibmFtZSI6IkRJ4buCTiBESeG7gE4iLCJwYXNzd29yZCI6IiQyYiQxMCR6WDk5alRFQ3BaUWxRQVh5ZjlqTHB1OUlCYUV5ZHl6MzcvU3FuNUZtL295ci9wTHR4cHBRLiIsInBob25lIjoiMDEyMzQ1Njc4IiwiYWRkcmVzcyI6IjFiLDJjIGhjbSIsIl9fdiI6MH0sImlhdCI6MTY4NDkwMjM4Nn0.L2X2pYdmBpfZR9o6uDrRBehaPjfcw4a_6s_hv20HCvc
