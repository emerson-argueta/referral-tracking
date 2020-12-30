import { reducerFactory } from "../../../ReducerFactory";
import { TReferralPartnerPage } from "./actions/ReferralPartnerPageActions";
import { ReferralOwnerPageHandlers, ReferralPartnerPageHandlers } from "./handlers/ReferralPartnerPageHandlers";
import { initReferralOwnerPageState, initReferralPartnerPageState, IReferralOwnerPageState, IReferralPartnerPageState } from "./ReferralPartnerPageState";


export const ReferralPartnerPageReducer = reducerFactory<IReferralPartnerPageState, TReferralPartnerPage>(initReferralPartnerPageState, ReferralPartnerPageHandlers)

export const ReferralOwnerPageReducer = reducerFactory<IReferralOwnerPageState, TReferralOwnerPage>(initReferralOwnerPageState, ReferralOwnerPageHandlers)