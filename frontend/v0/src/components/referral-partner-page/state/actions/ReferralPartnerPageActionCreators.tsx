import axios, { AxiosResponse } from "axios"
import { Leads } from "../../filterable-referral-owner-table/types/Leads"
import { GET_LEADS_REFERRAL_OWNER_FAIL, GET_LEADS_REFERRAL_OWNER_SUCCESS, IGetLeadsForReferralOwner } from "./ReferralPartnerPageActions"

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