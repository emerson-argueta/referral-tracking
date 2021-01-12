import { reducerFactory } from "../../../ReducerFactory";
import { TReferralPartnerPage } from "./actions/ReferralPartnerPageActions";
import { ReferralPartnerPageHandlers } from "./handlers/ReferralPartnerPageHandlers";
import { initReferralPartnerPageState, IReferralPartnerPageState } from "./ReferralPartnerPageState";


export const ReferralPartnerPageReducer = reducerFactory<IReferralPartnerPageState, TReferralPartnerPage>(initReferralPartnerPageState, ReferralPartnerPageHandlers)