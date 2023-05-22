"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = exports.ProductRouter = exports.UserRouter = void 0;
var User_1 = __importDefault(require("./User"));
exports.UserRouter = User_1.default;
var Product_1 = __importDefault(require("./Product"));
exports.ProductRouter = Product_1.default;
var Category_1 = __importDefault(require("./Category"));
exports.CategoryRouter = Category_1.default;
