"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomUser = void 0;
var express_1 = __importDefault(require("express"));
var connectDatabase_1 = __importDefault(require("./utils/connectDatabase"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var Cart_1 = __importDefault(require("./routes/Cart"));
var User_1 = __importDefault(require("./models/User"));
var bodyParser = require('body-parser');
var debug = require('debug')('backend:server');
require('dotenv').config();
// const redis = require('redis')
// const bcrypt = require('bcrypt')
// import UserSchema, { UserDoc } from './models/User'
// const secretKey: any = process.env.TOKEN_SECRET_KEY
// const client = redis.createClient()
var faker = require('@faker-js/faker').faker;
// const otpGenerator = require('otp-generator')
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
app.use('/api/posts', routes_1.PostsRouter);
app.use('/api/comment', routes_1.CommentRouter);
app.use('/api/cart', Cart_1.default);
app.use('/api', routes_1.AuthRouter);
app.listen(PORT, function () {
    console.log("Server is running at port: http://localhost:".concat(PORT));
    debug('Server is up and running on port ', PORT);
});
var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword = 's0//P4$$w0rD';
var someOtherPlaintextPassword = 'not_bacon';
var mongoose = require('mongoose');
// // Định nghĩa schema và model cho User
function createRandomUser() {
    bcrypt.hash(faker.internet.password(), saltRounds).then(function (hash) {
        return {
            id: faker.string.uuid(),
            name: faker.internet.userName(),
            email: faker.internet.email(),
            avatarUrl: faker.image.avatar(),
            password: hash,
            birthday: faker.date.birthdate(),
            created: faker.date.past(),
            typeAccount: 0,
            isAdmin: false,
        };
    });
}
exports.createRandomUser = createRandomUser;
function seedUser(numData) {
    return Promise.all(__spreadArray([], Array(numData), true).map(function () {
        var newUser = new User({
            name: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.internet.avatar(),
            password: '123456',
        });
        return bcrypt
            .genSaltAsync(10)
            .then(function (salt) { return bcrypt.hash(newUser.password, salt); })
            .then(function (hash) {
            newUser.password = hash;
            return newUser;
        });
    }));
}
var userDB = seedUser(5);
console.log('====================================');
console.log(userDB);
console.log('====================================');
// export function createRandomPosts(): any {
//   return {
//     id: faker.string.uuid(),
//     name: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatarUrl: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthday: faker.date.birthdate(),
//     created: faker.date.past(),
//     typeAccount: 0,
//     isAdmin: false,
//   }
// }
// export const USERS: UserDoc[] = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// })
var User = mongoose.model('users', User_1.default);
// Thêm dữ liệu giả vào MongoDB
// User.insertMany(USERS)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })
// // Tạo các đối tượng User giả lập
// const users = [
//   { name: 'John Doe', email: 'johndoe@gmail.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'janesmith@yahoo.com', password: '987654321' },
// ]
// // Thêm dữ liệu giả vào MongoDB
// User.insertMany(USERS)
//   .then((docs: any) => {
//     console.log(docs)
//   })
//   .catch((err: any) => {
//     console.error(err)
//   })
