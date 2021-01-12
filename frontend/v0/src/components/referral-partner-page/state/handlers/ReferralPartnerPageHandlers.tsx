import { Reducer } from "react"
import { ReferralPartnerPage } from "../../../ReferralPartnerPage"
import { GET_ALL_REFERRAL_OWNERS_FAIL, GET_ALL_REFERRAL_OWNERS_SUCCESS, GET_LEADS_REFERRAL_OWNER_FAIL, GET_LEADS_REFERRAL_OWNER_SUCCESS, IGetAllReferralOwners, IGetLeadsForReferralOwner, ISetSelectedReferralOwnerUsername, SET_SELECTED_REFERRAL_OWNER_USERNAME } from "../actions/ReferralPartnerPageActions"
import { IReferralPartnerPageState } from "../ReferralPartnerPageState"

export const getLeadsForReferralOwnerSuccess: Reducer<IReferralPartnerPageState, IGetLeadsForReferralOwner> = (state, action): IReferralPartnerPageState => {
    let newState = { ...state }
    if (action.payload) {
        newState = {
            ...state,
            allLeads: {
                ...state.allLeads,
                [action.payload.referralOwnerUsername]: action.payload.leads
            }
        }
    }

    return newState
}

export const getLeadsForReferralOwnerFail: Reducer<IReferralPartnerPageState, IGetLeadsForReferralOwner> = (state, action): IReferralPartnerPageState => {

    return {
        ...state,
        error: action.error
    }
}


export const getAllReferralOwnersSuccess: Reducer<IReferralPartnerPageState, IGetAllReferralOwners> = (state, action): IReferralPartnerPageState => {
    let newState = { ...state }
    if (action.payload) {
        newState = {
            ...state,
            referralOwners: action.payload.referralOwners
        }
    }

    return newState
}

export const getAllReferralOwnersFail: Reducer<IReferralPartnerPageState, IGetAllReferralOwners> = (state, action): IReferralPartnerPageState => {

    return {
        ...state,
        error: action.error
    }
}

export const setSelectedReferralOwnerUsername: Reducer<IReferralPartnerPageState, ISetSelectedReferralOwnerUsername> = (state, action): IReferralPartnerPageState => {

    return {
        ...state,
        selectedReferralOwnerUsername: action.payload
    }
}

export const ReferralPartnerPageHandlers = {
    [GET_LEADS_REFERRAL_OWNER_SUCCESS]: getLeadsForReferralOwnerSuccess,
    [GET_LEADS_REFERRAL_OWNER_FAIL]: getLeadsForReferralOwnerSuccess,
    [GET_ALL_REFERRAL_OWNERS_SUCCESS]: getAllReferralOwnersSuccess,
    [GET_ALL_REFERRAL_OWNERS_FAIL]: getAllReferralOwnersFail,
    [SET_SELECTED_REFERRAL_OWNER_USERNAME]: setSelectedReferralOwnerUsername
}