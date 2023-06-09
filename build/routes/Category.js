"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Category_1 = __importDefault(require("../controller/Category"));
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var CategoryRouter = (0, express_1.Router)();
CategoryRouter.get('/', AuthenticateToken_1.authenticateToken, Category_1.default.get);
CategoryRouter.post('/', AuthenticateToken_1.authenticateToken, Category_1.default.create);
CategoryRouter.put('/:id', AuthenticateToken_1.authenticateToken, Category_1.default.update);
CategoryRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Category_1.default.delete);
exports.default = CategoryRouter;
