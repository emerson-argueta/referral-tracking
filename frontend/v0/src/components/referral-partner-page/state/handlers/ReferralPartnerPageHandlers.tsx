import { Reducer } from "react"
import { ReferralPartnerPage } from "../../../ReferralPartnerPage"
import { GET_LEADS_REFERRAL_OWNER_FAIL, GET_LEADS_REFERRAL_OWNER_SUCCESS, IGetLeadsForReferralOwner } from "../actions/ReferralPartnerPageActions"
import { IReferralPartnerPageState } from "../ReferralPartnerPageState"

export const getLeadsForReferralOwnerSuccess: Reducer<IReferralPartnerPageState, IGetLeadsForReferralOwner> = (state, action): IReferralPartnerPageState => {
    const newState = action.payload && {
        ...state,
        allLeads: {
            ...state.allLeads,
            [action.payload.referralOwnerUsername]: action.payload.leads
        }
    } || { ...state }

    return newState
}

export const getLeadsForReferralOwnerFail: Reducer<IReferralPartnerPageState, IGetLeadsForReferralOwner> = (state, action): IReferralPartnerPageState => {

    return {
        ...state,
        error: action.error
    }
}

export const ReferralPartnerPageHandlers = {
    [GET_LEADS_REFERRAL_OWNER_SUCCESS]: getLeadsForReferralOwnerSuccess,
    [GET_LEADS_REFERRAL_OWNER_FAIL]: getLeadsForReferralOwnerFail
}