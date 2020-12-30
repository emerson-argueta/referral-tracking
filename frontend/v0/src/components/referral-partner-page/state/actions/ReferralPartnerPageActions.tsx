import { Leads } from "../../filterable-referral-owner-table/types/Leads"

export const GET_LEADS_REFERRAL_OWNER_FAIL = "RFP_GET_LEADS_REFERRAL_OWNER_FAIL"
export const GET_LEADS_REFERRAL_OWNER_SUCCESS = "RFP_GET_LEADS_REFERRAL_OWNER_SUCCESS"
export interface IGetLeadsForReferralOwner {
    type: typeof GET_LEADS_REFERRAL_OWNER_FAIL | typeof GET_LEADS_REFERRAL_OWNER_SUCCESS
    payload?: {
        referralOwnerUsername: string,
        leads: Leads
    }
    error?: any
}

export type TReferralPartnerPage = IGetLeadsForReferralOwner