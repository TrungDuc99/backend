"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var defaultType_1 = __importDefault(require("../utils/defaultType"));
require('dotenv').config();
var CommentSchema = new mongoose_1.Schema({
    comment: defaultType_1.default.string,
    userId: defaultType_1.default.string,
    countLikes: defaultType_1.default.number,
    countDisLikes: defaultType_1.default.number,
    countShare: defaultType_1.default.number,
    replyForCommentId: defaultType_1.default.string,
    created: defaultType_1.default.date_now,
    updated: defaultType_1.default.date,
});
exports.default = CommentSchema;
