import React, { useEffect, useLayoutEffect } from 'react'
import { LeadTable } from './filterable-referral-owner-table/LeadTable'
import { DropdownSearchBar } from './filterable-referral-owner-table/DropdownSearchBar'
import { ReferralOwners } from './filterable-referral-owner-table/types/ReferralOwners'
import { Leads } from './filterable-referral-owner-table/types/Leads'
import { ReferralPartnerPage } from '../ReferralPartnerPage'
import { getAllReferralOwners, getLeadsForReferralOwner, setSelectedReferralOwnerUsername } from './state/actions/ReferralPartnerPageActionCreators'
import { useReferralPartnerPageContext } from './state/ReferralPartnerPageContext'

interface FilterableReferralOwnerTableProps {
}

export const FilterableReferralOwnerTable = (props: FilterableReferralOwnerTableProps) => {
    const [referralPartnerPageState, referralPartnerPageDispatch] = useReferralPartnerPageContext()
    const { referralOwners, allLeads, selectedReferralOwnerUsername } = referralPartnerPageState
    const leads = selectedReferralOwnerUsername && allLeads && allLeads[selectedReferralOwnerUsername]

    const handleGetLeadsForReferralOwner = async (referralOwnerUsername: string) => {
        // call backend api to get leads for referral owner username
        referralPartnerPageDispatch(
            await getLeadsForReferralOwner(referralOwnerUsername, allLeads)
        )

    }
    const handleSetSelectedReferralOwnerUsername = (referralOwnerUsername: string) => {
        referralPartnerPageDispatch(
            setSelectedReferralOwnerUsername(referralOwnerUsername)
        )
    }
    const handleGetAllReferralOwners = async () => {
        referralPartnerPageDispatch(
            await getAllReferralOwners()
        )
    }

    useEffect(() => {
        handleGetAllReferralOwners()
    }, [])


    console.log('filterable referral owner table ', referralPartnerPageState);

    return (
        <div>
            <DropdownSearchBar
                referralOwners={referralOwners}
                searchText={''}
                handleGetLeadsForReferralOwner={handleGetLeadsForReferralOwner}
                handleSetSelectedReferralOwnerUsername={handleSetSelectedReferralOwnerUsername}
            />
            {leads && <LeadTable
                leads={leads}
            />}
        </div>
    )
}
