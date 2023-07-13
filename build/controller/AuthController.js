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
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var jwt = require('jsonwebtoken');
require('dotenv').config();
var bcrypt = require('bcrypt');
var secretKey = process.env.TOKEN_SECRET_KEY;
var AuthCallback = /** @class */ (function () {
    function AuthCallback() {
    }
    AuthCallback.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user, isPasswordValid, token, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, models_1.UserModel.findOne({ email: email })]; // find the user by email
                    case 1:
                        user = _b.sent() // find the user by email
                        ;
                        if (!user) {
                            return [2 /*return*/, res.status(401).send({ message: 'Invalid username or password' })]; // return the error message when the user does not exist
                        }
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        isPasswordValid = _b.sent();
                        if (!isPasswordValid) {
                            return [2 /*return*/, res.status(401).send({ message: 'Invalid username or password' })];
                        }
                        token = jwt.sign({
                            user: {
                                uid: user._id,
                                email: user.email,
                                name: user.name,
                                phone: user.phone,
                                address: user.address,
                            },
                        }, secretKey
                        // {
                        //   expiresIn: '30s', // expires in 30 days
                        // }
                        );
                        return [2 /*return*/, res.status(200).send({ token: token })];
                    case 3:
                        err_1 = _b.sent();
                        res.status(500).json({ error: err_1 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthCallback.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, name, password, phone, address, hashedPassword, payload, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, email = _a.email, name = _a.name, password = _a.password, phone = _a.phone, address = _a.address;
                        return [4 /*yield*/, bcrypt.hash(password, 10)];
                    case 1:
                        hashedPassword = _b.sent();
                        return [4 /*yield*/, models_1.UserModel.create({
                                email: email,
                                name: name,
                                password: hashedPassword,
                                phone: phone,
                                address: address,
                            })];
                    case 2:
                        payload = _b.sent();
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 3:
                        err_2 = _b.sent();
                        res.status(500).json({ error: err_2 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthCallback.logout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, description, image, id, payload, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name = _a.name, description = _a.description, image = _a.image, id = _a.id;
                        return [4 /*yield*/, models_1.UserModel.create({
                                name: name,
                                id: id,
                                description: description,
                                image: image,
                            })];
                    case 1:
                        payload = _b.sent();
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 2:
                        err_3 = _b.sent();
                        res.status(500).json({ error: err_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthCallback.me = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userID, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userID = req.user.user._id // Lấy id của user.
                        ;
                        return [4 /*yield*/, models_1.UserModel.findOne({ _id: userID })];
                    case 1:
                        payload = _a.sent();
                        if (!payload) {
                            return [2 /*return*/, res.status(404).send({ message: 'User not found' })];
                        }
                        return [2 /*return*/, res.send(payload)]; // Trả về thông tin user.
                }
            });
        });
    };
    return AuthCallback;
}());
exports.default = AuthCallback;
