"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Product_1 = __importDefault(require("../controller/Product"));
var ProductRouter = (0, express_1.Router)();
ProductRouter.get('/', Product_1.default.get);
ProductRouter.post('/', Product_1.default.create);
ProductRouter.put('/', Product_1.default.update);
ProductRouter.delete('/:id', Product_1.default.delete);
ProductRouter.get('/:id', Product_1.default.getOnlyProduct);
exports.default = ProductRouter;
