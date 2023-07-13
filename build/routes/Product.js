"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Product_1 = __importDefault(require("../controller/Product"));
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var ProductRouter = (0, express_1.Router)();
ProductRouter.get('/', AuthenticateToken_1.authenticateToken, Product_1.default.get);
ProductRouter.get('/categoryId/:id', AuthenticateToken_1.authenticateToken, Product_1.default.getProductByCategory);
ProductRouter.post('/', AuthenticateToken_1.authenticateToken, Product_1.default.create);
ProductRouter.put('/', AuthenticateToken_1.authenticateToken, Product_1.default.update);
ProductRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Product_1.default.delete);
ProductRouter.get('/:id', AuthenticateToken_1.authenticateToken, Product_1.default.getOne);
exports.default = ProductRouter;
