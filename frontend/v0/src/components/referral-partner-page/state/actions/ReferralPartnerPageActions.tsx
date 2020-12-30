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

export const GET_ALL_REFERRAL_OWNERS_FAIL = "RFO_GET_ALL_REFERRAL_OWNERS_FAIL"
export const GET_ALL_REFERRAL_OWNERS_SUCCESS = "RFO_GET_ALL_REFERRAL_OWNERS_SUCCESS"

//Questions regarding interface below:
// How do we know the payload's props?
export interface IGetAllReferralOwners {
    type: typeof GET_ALL_REFERRAL_OWNERS_FAIL | typeof GET_ALL_REFERRAL_OWNERS_SUCCESS
    payload?: {
        referralOwnerUsername: string
    }
    error?: any
}

export type TReferralPartnerPage = IGetLeadsForReferralOwner
export type TReferralOwnerPage = IGetAllReferralOwners
