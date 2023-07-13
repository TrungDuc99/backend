"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var defaultType_1 = __importDefault(require("../utils/defaultType"));
require('dotenv').config();
var CartSchema = new mongoose_1.Schema({
    userId: defaultType_1.default.requiredString,
    items: [
        {
            productId: defaultType_1.default.requiredString,
            quantity: defaultType_1.default.number,
            price: defaultType_1.default.number,
            totalPrice: defaultType_1.default.number,
        },
    ],
    created: defaultType_1.default.date_now,
    updated: defaultType_1.default.date,
});
exports.default = CartSchema;
