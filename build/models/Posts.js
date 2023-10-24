"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var defaultType_1 = __importDefault(require("../utils/defaultType"));
require('dotenv').config();
var PostSchema = new mongoose_1.Schema({
    content: defaultType_1.default.string,
    description: defaultType_1.default.string,
    userId: __assign(__assign({}, defaultType_1.default.string), { required: true }),
    title: defaultType_1.default.string,
    image: [],
    countLike: defaultType_1.default.number,
    countComment: defaultType_1.default.number,
    countView: defaultType_1.default.number,
    topic: defaultType_1.default.string,
    created: defaultType_1.default.date_now,
    updated: defaultType_1.default.date,
});
exports.default = PostSchema;
