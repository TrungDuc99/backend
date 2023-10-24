"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = exports.PostsModel = exports.CommentModel = exports.UserModel = exports.ProductModel = exports.CategoryModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Category_1 = __importDefault(require("./Category"));
var Product_1 = __importDefault(require("./Product"));
var User_1 = __importDefault(require("./User"));
var Comment_1 = __importDefault(require("./Comment"));
var Posts_1 = __importDefault(require("./Posts"));
var Cart_1 = __importDefault(require("./Cart"));
var UserModel = mongoose_1.default.model('User', User_1.default);
exports.UserModel = UserModel;
UserModel.collection.createIndex({ name: 'text', email: 'text' });
var ProductModel = mongoose_1.default.model('Product', Product_1.default);
exports.ProductModel = ProductModel;
var CategoryModel = mongoose_1.default.model('Category', Category_1.default);
exports.CategoryModel = CategoryModel;
var CommentModel = mongoose_1.default.model('Comment', Comment_1.default);
exports.CommentModel = CommentModel;
var PostsModel = mongoose_1.default.model('Post', Posts_1.default);
exports.PostsModel = PostsModel;
var CartModel = mongoose_1.default.model('Cart', Cart_1.default);
exports.CartModel = CartModel;
