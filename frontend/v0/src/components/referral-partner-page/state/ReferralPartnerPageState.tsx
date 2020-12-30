import { Leads } from "../filterable-referral-owner-table/types/Leads";
import { ReferralOwners } from "../filterable-referral-owner-table/types/ReferralOwners";

export const initReferralPartnerPageState: IReferralPartnerPageState = {

}

export interface IReferralPartnerPageState {
    allLeads?: { [referralOwnerUserName: string]: Leads }
    selectedReferralOwnerUsername?: string
    error?: any
}