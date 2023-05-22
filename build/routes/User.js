"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = __importDefault(require("../controller/User"));
var UserRouter = (0, express_1.Router)();
UserRouter.get('/', User_1.default.get);
UserRouter.get('/:id', User_1.default.getOne);
UserRouter.post('/', User_1.default.create);
UserRouter.put('/:id', User_1.default.update);
UserRouter.delete('/:id', User_1.default.delete);
exports.default = UserRouter;
