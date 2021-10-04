"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const routes_1 = __importDefault(require("./routes"));
require('dotenv').config({ path: (0, path_1.resolve)(process.cwd(), '.env') });
const port = parseInt(process.env.PORT || '8081', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes_1.default.getRequestHandler(app);
app.prepare().then(() => {
    const expressApp = (0, express_1.default)();
    expressApp.disable('x-powered-by');
    expressApp.use(handler).listen(port);
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
})
    .catch((e) => {
    console.log('Something went wrong: ', e);
    process.exit();
});
