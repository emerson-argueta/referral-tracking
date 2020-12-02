import React, { Fragment } from 'react'
import { FilterableReferralOwnerTable } from './referral-partner-page/FilterableReferralOwnerTable'
import { NewLead } from './referral-partner-page/NewLead'


export const ReferralPartnerPage = () => {

    return (
        <Fragment>
            <div style={{ width: '30%', margin: '10px' }}>
                <FilterableReferralOwnerTable />
            </div>
            <div>
                <NewLead />
            </div>

        </Fragment>
    )
}
