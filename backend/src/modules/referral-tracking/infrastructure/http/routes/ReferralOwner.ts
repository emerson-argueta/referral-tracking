import express from "express";
import { getLeadsForOwnerController } from "../../../usecase/leads/get-leads-for-owner";



const referralOwnerRouter = express.Router();

referralOwnerRouter.get('/leads', (req, res) => getLeadsForOwnerController.execute(req, res))
export {
    referralOwnerRouter
}