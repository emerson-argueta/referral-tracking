import axios, { AxiosResponse } from "axios"
import { Leads } from "../../filterable-referral-owner-table/types/Leads"
import { GET_LEADS_REFERRAL_OWNER_FAIL, GET_LEADS_REFERRAL_OWNER_SUCCESS, IGetAllReferralOwners, IGetLeadsForReferralOwner, GET_ALL_REFERRAL_OWNERS_FAIL, GET_ALL_REFERRAL_OWNERS_SUCCESS } from "./ReferralPartnerPageActions"

export const getLeadsForReferralOwner = async (referralOwnerUsername: string, allLeads: { [referralOwnerUsername: string]: Leads }): Promise<IGetLeadsForReferralOwner> => {
    const url = '/api/v1/referralOwner/lead'
    const queryParams = '?referralOwnerUsername=' + referralOwnerUsername
    if (referralOwnerUsername in allLeads) {
        return {
            type: GET_LEADS_REFERRAL_OWNER_SUCCESS,
            payload: {
                referralOwnerUsername: referralOwnerUsername,
                leads: allLeads[referralOwnerUsername]
            }
        }
    }
    try {
        const res: AxiosResponse<Leads> = await axios.get(url + queryParams)
        return {
            type: GET_LEADS_REFERRAL_OWNER_SUCCESS,
            payload: {
                referralOwnerUsername: referralOwnerUsername,
                leads: res.data
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
//This needs to be finished.
export const getAllReferralOwners = async (): Promise<IGetAllReferralOwners> => {
    const url = '/api/v1/referralOwner/'
    const queryParams = '?referralOwnerUsername='
    
    

    if (referralOwnerUsername in allLeads) {
        return {
            type: GET_ALL_REFERRAL_OWNERS_SUCCESS,
            payload: {
                referralOwnerUsername: referralOwnerUsername
            }
        }
    }
    try {
        const res: AxiosResponse<Leads> = await axios.get(url + queryParams)
        return {
            type: GET_ALL_REFERRAL_OWNERS_FAIL,
            payload: {
                referralOwnerUsername: referralOwnerUsername,
                leads: res.data
            }

        }
    } catch (error) {
        return {
            type: GET_LEADS_REFERRAL_OWNER_FAIL,
            error: error?.response?.data?.error || ''

        }
    }


}