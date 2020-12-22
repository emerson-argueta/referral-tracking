import React from 'react'
import { LeadTable } from './filterable-referral-owner-table/LeadTable'
import { DropdownSearchBar } from './filterable-referral-owner-table/DropdownSearchBar'
import { ReferralOwners } from './filterable-referral-owner-table/types/ReferralOwners'
import { Leads } from './filterable-referral-owner-table/types/Leads'

interface FilterableReferralOwnerTableProps {
    referralOwners: ReferralOwners
    leads: Leads

}

export const FilterableReferralOwnerTable = (props: FilterableReferralOwnerTableProps) => {
    const leads = props.leads
    const referralOwner = props.referralOwners

    return (
        <div>
            <DropdownSearchBar
                referralOwners={referralOwner}
                searchText={''}
            />
            <LeadTable
                leads={leads}
            />
        </div>
    )
}
