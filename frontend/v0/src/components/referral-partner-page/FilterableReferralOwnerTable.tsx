import React from 'react'
import { LeadTable } from './filterable-referral-owner-table/LeadTable'
import { DropdownSearchBar } from './filterable-referral-owner-table/DropdownSearchBar'
import { ReferralOwners } from './filterable-referral-owner-table/types/ReferralOwners'
import { Leads } from './filterable-referral-owner-table/types/Leads'
import { ReferralPartnerPage } from '../ReferralPartnerPage'
import { getLeadsForReferralOwner } from './state/actions/ReferralPartnerPageActionCreators'
import { useReferralPartnerPageContext } from './state/ReferralPartnerPageContext'

interface FilterableReferralOwnerTableProps {
    referralOwners: ReferralOwners
    leads: Leads

}

export const FilterableReferralOwnerTable = (props: FilterableReferralOwnerTableProps) => {

    const referralOwners = props.referralOwners

    const [referralPartnerPageState, referralPartnerPageDispatch] = useReferralPartnerPageContext()
    const { allLeads, selectedReferralOwnerUsername } = referralPartnerPageState
    const leads = selectedReferralOwnerUsername && allLeads && allLeads[selectedReferralOwnerUsername]

    const handleGetLeadsForReferralOwner = async (referralOwnerUsername: string) => {
        // call backend api to get leads for referral owner username
        allLeads && referralPartnerPageDispatch(
            await getLeadsForReferralOwner(referralOwnerUsername, allLeads)
        )

    }
    return (
        <div>
            <DropdownSearchBar
                referralOwners={referralOwners}
                searchText={''}
                handleGetLeadsForReferralOwner={handleGetLeadsForReferralOwner}
            />
            {leads && <LeadTable
                leads={leads}
            />}
        </div>
    )
}
