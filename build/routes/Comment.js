"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Product_1 = __importDefault(require("../controller/Product"));
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var CommentRouter = (0, express_1.Router)();
CommentRouter.get('/', AuthenticateToken_1.authenticateToken, Product_1.default.get);
CommentRouter.post('/', AuthenticateToken_1.authenticateToken, Product_1.default.create);
CommentRouter.put('/', AuthenticateToken_1.authenticateToken, Product_1.default.update);
CommentRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Product_1.default.delete);
CommentRouter.get('/:id', AuthenticateToken_1.authenticateToken, Product_1.default.getOne);
exports.default = CommentRouter;
