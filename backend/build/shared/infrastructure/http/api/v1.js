"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const ReferralPartner_1 = require("../../../../modules/referral-tracking/infrastructure/http/routes/ReferralPartner");
const v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.use('/referralPartner', ReferralPartner_1.referralPartnerRouter);
//# sourceMappingURL=v1.js.map