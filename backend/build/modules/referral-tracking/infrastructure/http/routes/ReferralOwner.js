"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralOwnerRouter = void 0;
const express_1 = __importDefault(require("express"));
const get_leads_for_owner_1 = require("../../../usecase/leads/get-leads-for-owner");
const referralOwnerRouter = express_1.default.Router();
exports.referralOwnerRouter = referralOwnerRouter;
referralOwnerRouter.get('/leads', (req, res) => get_leads_for_owner_1.getLeadsForOwnerController.execute(req, res));
//# sourceMappingURL=ReferralOwner.js.map