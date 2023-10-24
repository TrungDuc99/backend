"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS = exports.LoginService = void 0;
var express_1 = __importDefault(require("express"));
var connectDatabase_1 = __importDefault(require("./utils/connectDatabase"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var Cart_1 = __importDefault(require("./routes/Cart"));
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var User_1 = __importDefault(require("./models/User"));
// CJS
var faker = require('@faker-js/faker').faker;
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
app.use('/api/posts', routes_1.PostsRouter);
app.use('/api/comment', routes_1.CommentRouter);
app.use('/api/cart', Cart_1.default);
app.use('/api', routes_1.AuthRouter);
app.listen(PORT, function () {
    console.log('Server is running at port:', PORT);
});
var mongoose = require('mongoose');
// Định nghĩa schema và model cho User
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.createRandomUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt
                            .hash(faker.internet.password(), 10)
                            .toPromise()];
                    case 1:
                        hashedPassword = _a.sent();
                        return [2 /*return*/, {
                                id: faker.string.uuid(),
                                name: faker.internet.userName(),
                                email: faker.internet.email(),
                                avatarUrl: faker.image.avatar(),
                                password: hashedPassword,
                                birthday: faker.date.birthdate(),
                                created: faker.date.past(),
                                typeAccount: 0,
                                isAdmin: false,
                            }];
                }
            });
        });
    };
    return LoginService;
}());
exports.LoginService = LoginService;
var createRandomUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bcrypt.hash(faker.internet.password(), 10)];
            case 1:
                hashedPassword = _a.sent();
                return [2 /*return*/, {
                        id: faker.string.uuid(),
                        name: faker.internet.userName(),
                        email: faker.internet.email(),
                        avatarUrl: faker.image.avatar(),
                        password: hashedPassword,
                        birthday: faker.date.birthdate(),
                        created: faker.date.past(),
                        typeAccount: 0,
                        isAdmin: false,
                    }];
        }
    });
}); };
// export async function createRandomUser(): any {
//     // const hashedPassword = await bcrypt.hash(password, 10)
//   return {
//     id: faker.string.uuid(),
//     name: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatarUrl: faker.image.avatar(),
//     password:  faker.internet.password(),
//     birthday: faker.date.birthdate(),
//     created: faker.date.past(),
//     typeAccount: 0,
//     isAdmin: false,
//   }
// }
exports.USERS = faker.helpers.multiple(createRandomUser, {
    count: 5,
});
console.log('====================================');
console.log(exports.USERS);
console.log('====================================');
var User = mongoose.model('users', User_1.default);
// // Tạo các đối tượng User giả lập
// const users = [
//   { name: 'John Doe', email: 'johndoe@gmail.com', password: 'password123' },
//   { name: 'Jane Smith', email: 'janesmith@yahoo.com', password: '987654321' },
// ]
// // Thêm dữ liệu giả vào MongoDB
User.insertMany(exports.USERS)
    .then(function (docs) {
    console.log(docs);
})
    .catch(function (err) {
    console.error(err);
});
//----- Token Authentication -------
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmNjOTZlMDAyYTc0ZGE1NGM1ZGUwOCIsImVtYWlsIjoibmdvY2RpZW5AZ21haWwuY29tIiwibmFtZSI6IkRJ4buCTiBESeG7gE4iLCJwYXNzd29yZCI6IiQyYiQxMCR6WDk5alRFQ3BaUWxRQVh5ZjlqTHB1OUlCYUV5ZHl6MzcvU3FuNUZtL295ci9wTHR4cHBRLiIsInBob25lIjoiMDEyMzQ1Njc4IiwiYWRkcmVzcyI6IjFiLDJjIGhjbSIsIl9fdiI6MH0sImlhdCI6MTY4NDkwMjM4Nn0.L2X2pYdmBpfZR9o6uDrRBehaPjfcw4a_6s_hv20HCvc
