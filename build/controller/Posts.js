"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
require('dotenv').config();
var secretKey = process.env.TOKEN_SECRET_KEY;
var PostsCallback = /** @class */ (function () {
    function PostsCallback() {
    }
    PostsCallback.get = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pageNumber, pageSize, result, totalCount, startIndex, endIndex, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        pageNumber = parseInt(req.query.pageNumber) || 0;
                        pageSize = parseInt(req.query.pageSize) || 12;
                        result = {};
                        return [4 /*yield*/, models_1.PostsModel.countDocuments().exec()];
                    case 1:
                        totalCount = _c.sent();
                        startIndex = pageNumber * pageSize;
                        endIndex = (pageNumber + 1) * pageSize;
                        result.totalCount = totalCount;
                        result.currentPage = pageNumber;
                        result.pageSize = pageSize;
                        result.totalPages = Math.ceil(totalCount / pageSize);
                        if (startIndex > 0) {
                            result.previous = {
                                pageNumber: pageNumber - 1,
                                pageSize: pageSize,
                            };
                        }
                        _a = endIndex;
                        return [4 /*yield*/, models_1.PostsModel.countDocuments().exec()];
                    case 2:
                        if (_a < (_c.sent())) {
                            result.next = {
                                pageNumber: pageNumber + 1,
                                pageSize: pageSize,
                            };
                        }
                        _b = result;
                        return [4 /*yield*/, models_1.PostsModel.find()
                                .sort('-_id')
                                .skip(startIndex)
                                .limit(pageSize)
                                .exec()];
                    case 3:
                        _b.data = _c.sent();
                        result.rowsPerPage = pageSize;
                        return [2 /*return*/, res.json({
                                success: true,
                                msg: 'Posts Fetched successfully',
                                data: result,
                            })
                            // const payload = await PostsModel.find()
                            // return res.json({ success: true, data: payload })
                        ];
                    case 4:
                        err_1 = _c.sent();
                        res.status(500).json({ error: err_1 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var postID, payload, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postID = req.params.id;
                        return [4 /*yield*/, models_1.PostsModel.findOne({ _id: postID })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 2:
                        err_2 = _a.sent();
                        res.status(500).json({ error: err_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.getPostsByUserId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, payload, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.id;
                        return [4 /*yield*/, models_1.PostsModel.find({ userId: userId })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, res.json({ success: true, data: { payload: payload } })];
                    case 2:
                        err_3 = _a.sent();
                        res.status(500).json({ error: err_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.create = function (req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var data, payload, err_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        data = req.body;
                        if (!(!data.userId || data.userId === '')) return [3 /*break*/, 1];
                        // Nếu không, trả về một thông báo lỗi
                        return [2 /*return*/, res.status(400).json({ error: 'userId is required' })];
                    case 1: return [4 /*yield*/, models_1.PostsModel.create(__assign(__assign({}, data), { countLike: (_a = data === null || data === void 0 ? void 0 : data.countLike) !== null && _a !== void 0 ? _a : 0, countComment: (_b = data === null || data === void 0 ? void 0 : data.countComment) !== null && _b !== void 0 ? _b : 0, countView: (_c = data === null || data === void 0 ? void 0 : data.countView) !== null && _c !== void 0 ? _c : 0 }))];
                    case 2:
                        payload = _d.sent();
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_4 = _d.sent();
                        res.status(500).json({ error: err_4 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var idReq, _a, name, description, image, id, price, category, isActive, payload, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        idReq = req.params.id;
                        _a = req.body, name = _a.name, description = _a.description, image = _a.image, id = _a.id, price = _a.price, category = _a.category, isActive = _a.isActive;
                        if (!(idReq === id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, models_1.PostsModel.findOneAndUpdate({ _id: id }, { name: name, description: description, image: image, isActive: isActive, id: id, price: price, category: category })];
                    case 1:
                        payload = _b.sent();
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 2: return [2 /*return*/, res.status(404).send({ message: 'Mã không trùng khớp' })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_5 = _b.sent();
                        res.status(500).json({ error: err_5 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var postId, payload, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postId = req.params.id;
                        return [4 /*yield*/, models_1.PostsModel.deleteOne({ _id: postId })];
                    case 1:
                        payload = _a.sent();
                        if (payload.deletedCount === 0) {
                            // Trường hợp không tìm thấy bài đăng cần xóa
                            return [2 /*return*/, res.status(404).json({ success: false, message: 'Post not found' })];
                        }
                        else {
                            // Trường hợp đã xóa thành công
                            return [2 /*return*/, res.json({ success: true, message: 'Post successfully deleted' })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        // Trường hợp server bị lỗi
                        res.status(500).json({ success: false, error: err_6 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.createGraphQL = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.PostsModel.create(params)];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, payload];
                    case 2:
                        err_7 = _a.sent();
                        console.log(err_7);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.updateGraphQL = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, payload, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(params);
                        id = params.id;
                        return [4 /*yield*/, models_1.PostsModel.findOneAndUpdate({ _id: id }, params)];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, payload];
                    case 2:
                        err_8 = _a.sent();
                        console.log(err_8);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.getGraphQL = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, payload, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = params.id;
                        return [4 /*yield*/, models_1.PostsModel.findOne({ _id: id })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, payload];
                    case 2:
                        err_9 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostsCallback.getAllProductGraphQL = function (params, res) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.PostsModel.find()];
                    case 1:
                        payload = _a.sent();
                        console.log(payload);
                        return [2 /*return*/, res.json({ success: true, data: payload })];
                    case 2:
                        err_10 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PostsCallback;
}());
exports.default = PostsCallback;
