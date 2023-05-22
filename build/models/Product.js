"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var defaultType_1 = __importDefault(require("../utils/defaultType"));
require('dotenv').config();
var ProductSchema = new mongoose_1.Schema({
    name: defaultType_1.default.string,
    description: defaultType_1.default.string,
    image: defaultType_1.default.string,
    isActive: defaultType_1.default.boolean,
    price: defaultType_1.default.string,
    category: defaultType_1.default.string,
    create_date: defaultType_1.default.string,
});
exports.default = ProductSchema;
