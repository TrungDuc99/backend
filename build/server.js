"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connectDatabase_1 = __importDefault(require("./utils/connectDatabase"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes");
var bodyParser = require('body-parser');
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = parseInt(process.env.PORT, 10) || 5001;
(0, connectDatabase_1.default)();
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// routes api
app.use('/api/user', routes_1.UserRouter);
app.use('/api/product', routes_1.ProductRouter);
app.use('/api/category', routes_1.CategoryRouter);
app.listen(PORT, function () {
    console.log('Server is running at port:', PORT);
});
