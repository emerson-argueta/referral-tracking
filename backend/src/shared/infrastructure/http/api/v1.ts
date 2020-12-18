import express from "express";
import { referralOwnerRouter } from "../../../../modules/referral-tracking/infrastructure/http/routes/ReferralOwner";
import { referralPartnerRouter } from "../../../../modules/referral-tracking/infrastructure/http/routes/ReferralPartner";


const v1Router = express.Router();

v1Router.use('/referralPartner', referralPartnerRouter);
v1Router.use('/referralOwner', referralOwnerRouter)

export { v1Router }