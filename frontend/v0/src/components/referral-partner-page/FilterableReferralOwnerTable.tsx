import React from 'react'
import { LeadTable } from './filterable-referral-owner-table/LeadTable'
import { DropdownSearchBar } from './filterable-referral-owner-table/DropdownSearchBar'

interface FilterableReferralOwnerTableProps {
    leads: Array<any>

}

export const FilterableReferralOwnerTable = (props:FilterableReferralOwnerTableProps) => {
    const leads = props.leads

    return (
        <div>
            <DropdownSearchBar
                leads={leads}
                searchText={''}
            />
            <LeadTable
                leads={leads}
            />
        </div>
    )
}
