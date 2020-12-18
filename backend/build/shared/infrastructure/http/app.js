"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const v1_1 = require("./api/v1");
const app = express_1.default();
app.use(express_1.default.json());
app.use('/api/v1', v1_1.v1Router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`[App]: Listening on port ${port}`);
});
//# sourceMappingURL=app.js.map