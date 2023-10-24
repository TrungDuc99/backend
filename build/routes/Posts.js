"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthenticateToken_1 = require("../middleware/AuthenticateToken");
var Posts_1 = __importDefault(require("../controller/Posts"));
var PostsRouter = (0, express_1.Router)();
PostsRouter.get('/', AuthenticateToken_1.authenticateToken, Posts_1.default.get);
PostsRouter.post('/', AuthenticateToken_1.authenticateToken, Posts_1.default.create);
PostsRouter.put('/', AuthenticateToken_1.authenticateToken, Posts_1.default.update);
PostsRouter.delete('/:id', AuthenticateToken_1.authenticateToken, Posts_1.default.delete);
PostsRouter.get('/:id', AuthenticateToken_1.authenticateToken, Posts_1.default.getOne);
PostsRouter.get('/postsbyuser/:id', AuthenticateToken_1.authenticateToken, Posts_1.default.getPostsByUserId);
exports.default = PostsRouter;
