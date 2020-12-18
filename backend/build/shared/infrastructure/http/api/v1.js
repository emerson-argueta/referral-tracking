"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const ReferralOwner_1 = require("../../../../modules/referral-tracking/infrastructure/http/routes/ReferralOwner");
const ReferralPartner_1 = require("../../../../modules/referral-tracking/infrastructure/http/routes/ReferralPartner");
const v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.use('/referralPartner', ReferralPartner_1.referralPartnerRouter);
v1Router.use('/referralOwner', ReferralOwner_1.referralOwnerRouter);
//# sourceMappingURL=v1.js.map