"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralPartnerRouter = void 0;
const express_1 = __importDefault(require("express"));
const input_lead_1 = require("../../../usecase/referral-partner/input-lead");
const referralPartnerRouter = express_1.default.Router();
exports.referralPartnerRouter = referralPartnerRouter;
referralPartnerRouter.post('/lead', (req, res) => input_lead_1.inputLeadController.execute(req, res));
//# sourceMappingURL=ReferralPartner.js.map