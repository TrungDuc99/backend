"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Cart_1 = __importDefault(require("../controller/Cart"));
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var CartRouter = (0, express_1.Router)();
CartRouter.get('/', AuthenticateToken_1.authenticateToken, Cart_1.default.get);
CartRouter.post('/', AuthenticateToken_1.authenticateToken, Cart_1.default.create);
CartRouter.put('/', AuthenticateToken_1.authenticateToken, Cart_1.default.update);
CartRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Cart_1.default.delete);
// CartRouter.get('/:id', authenticateToken, CartCallback.getOne)
exports.default = CartRouter;
