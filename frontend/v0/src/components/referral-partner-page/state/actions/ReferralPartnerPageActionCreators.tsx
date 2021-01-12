import axios, { AxiosResponse } from "axios"
import { Leads } from "../../filterable-referral-owner-table/types/Leads"
import { ReferralOwners } from "../../filterable-referral-owner-table/types/ReferralOwners"
import { GET_LEADS_REFERRAL_OWNER_FAIL, GET_LEADS_REFERRAL_OWNER_SUCCESS, IGetAllReferralOwners, IGetLeadsForReferralOwner, GET_ALL_REFERRAL_OWNERS_FAIL, GET_ALL_REFERRAL_OWNERS_SUCCESS, ISetSelectedReferralOwnerUsername, SET_SELECTED_REFERRAL_OWNER_USERNAME } from "./ReferralPartnerPageActions"

export const getLeadsForReferralOwner = async (referralOwnerUsername: string, existingLeads?: { [referralOwnerUsername: string]: Leads }): Promise<IGetLeadsForReferralOwner> => {
    const url = '/api/v1/referralOwner/leads'
    const queryParams = '?referralOwnerUsername=' + referralOwnerUsername
    if (existingLeads && (referralOwnerUsername in existingLeads)) {
        return {
            type: GET_LEADS_REFERRAL_OWNER_SUCCESS,
            payload: {
                referralOwnerUsername: referralOwnerUsername,
                leads: existingLeads[referralOwnerUsername]
            }
        }
    }
    try {
        const res: AxiosResponse<{ leads: Leads }> = await axios.get(url + queryParams)
        return {
            type: GET_LEADS_REFERRAL_OWNER_SUCCESS,
            payload: {
                referralOwnerUsername: referralOwnerUsername,
                leads: res.data.leads
            }

        }
    } catch (error) {
        return {
            type: GET_LEADS_REFERRAL_OWNER_FAIL,
            error: error?.response?.data?.error || ''

        }
    }


}
//Since we are trying to get all referral owners here, what needs to be passed into this function?
export const getAllReferralOwners = async (): Promise<IGetAllReferralOwners> => {
    const url = '/api/v1/referralOwner'

    try {
        const res: AxiosResponse<{ referralowners: ReferralOwners }> = await axios.get(url)
        console.log('Get all referral owners action creator', res.data.referralowners);

        return {
            type: GET_ALL_REFERRAL_OWNERS_SUCCESS,
            payload: {
                referralOwners: res.data.referralowners,
            }

        }
    } catch (error) {
        return {
            type: GET_ALL_REFERRAL_OWNERS_FAIL,
            error: error?.response?.data?.error || ''

        }
    }


}

export const setSelectedReferralOwnerUsername = (referralOwnerUsername: string): ISetSelectedReferralOwnerUsername => {
    console.log('action creator for selected referral owner name called ===> ', referralOwnerUsername)
    return {
        type: SET_SELECTED_REFERRAL_OWNER_USERNAME,
        payload: referralOwnerUsername
    }
}