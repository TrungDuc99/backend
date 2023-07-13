"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var Post_1 = __importDefault(require("../controller/Post"));
var PostRouter = (0, express_1.Router)();
PostRouter.get('/', AuthenticateToken_1.authenticateToken, Post_1.default.get);
PostRouter.post('/', AuthenticateToken_1.authenticateToken, Post_1.default.create);
PostRouter.put('/', AuthenticateToken_1.authenticateToken, Post_1.default.update);
PostRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Post_1.default.delete);
PostRouter.get('/:id', AuthenticateToken_1.authenticateToken, Post_1.default.getOne);
exports.default = PostRouter;
