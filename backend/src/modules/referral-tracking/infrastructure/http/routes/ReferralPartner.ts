import express from "express";
import { inputLeadController } from "../../../usecase/referral-partner/input-lead";

const referralPartnerRouter = express.Router();

referralPartnerRouter.post('/lead', (req, res) => inputLeadController.execute(req, res))
referralPartnerRouter.get('/', (req, res) => inputLeadController.execute(req, res))

export {
    referralPartnerRouter
}
