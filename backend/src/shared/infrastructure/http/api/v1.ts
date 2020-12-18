import express from "express";
import { referralPartnerRouter } from "../../../../modules/referral-tracking/infrastructure/http/routes/ReferralPartner";


const v1Router = express.Router();

v1Router.use('/referralPartner', referralPartnerRouter);

export { v1Router }