import { Leads } from "../filterable-referral-owner-table/types/Leads";
import { ReferralOwners } from "../filterable-referral-owner-table/types/ReferralOwners";

export const initReferralPartnerPageState: IReferralPartnerPageState = {

}

//Needs fixing.
export const initReferralOwnerPageState: IReferralOwnerPageState = {

}

export interface IReferralPartnerPageState {
    allLeads?: { [referralOwnerUserName: string]: Leads }
    selectedReferralOwnerUsername?: string
    error?: any
}

export interface IReferralOwnerPageState {
    ReferralOwnerUsername: ReferralOwners
}