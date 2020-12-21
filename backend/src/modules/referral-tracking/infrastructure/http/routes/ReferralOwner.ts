import express from "express";
import { getLeadsForOwnerController } from "../../../usecase/leads/get-leads-for-owner";
import { getAllReferralOwnersController } from "../../../usecase/referral-owner/get-all-referral-owners";



const referralOwnerRouter = express.Router();

referralOwnerRouter.get('/leads', (req, res) => getLeadsForOwnerController.execute(req, res))

referralOwnerRouter.get('/', (req, res) => getAllReferralOwnersController.execute(req, res))


export {
    referralOwnerRouter
}