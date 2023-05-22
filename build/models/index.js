"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.ProductModel = exports.CategoryModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Category_1 = __importDefault(require("./Category"));
var Product_1 = __importDefault(require("./Product"));
var User_1 = __importDefault(require("./User"));
var UserModel = mongoose_1.default.model("User", User_1.default);
exports.UserModel = UserModel;
var ProductModel = mongoose_1.default.model("Product", Product_1.default);
exports.ProductModel = ProductModel;
var CategoryModel = mongoose_1.default.model("Category", Category_1.default);
exports.CategoryModel = CategoryModel;
