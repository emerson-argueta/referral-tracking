import React, { Fragment } from 'react'
import { FilterableReferralOwnerTable } from './referral-partner-page/FilterableReferralOwnerTable'
import { NewLead } from './referral-partner-page/NewLead'

const MOCK_LEADS = [
    { referralOwnerName: 'referralOwner1', title: 'Project0', estimate: '141.25', customerEmail: 'customer1@gmail.com' },
    { referralOwnerName: 'referralOwner2', title: 'Project1', estimate: '242.25', customerEmail: 'customer2@yahoo.com' },
    { referralOwnerName: 'referralOwner3', title: 'Project2', estimate: '343.25', customerEmail: 'customer3@zoho.com' },
    { referralOwnerName: 'referralOwner4', title: 'Project3', estimate: '444.25', customerEmail: 'customer4@gmail.com' },
    { referralOwnerName: 'referralOwner5', title: 'Project4', estimate: '545.25', customerEmail: 'customer5@yahoo.com' },
    { referralOwnerName: 'referralOwner6', title: 'Project5', estimate: '646.25', customerEmail: 'customer6@gmail.com' },
    { referralOwnerName: 'referralOwner7', title: 'Project6', estimate: '747.25', customerEmail: 'customer7@gmail.com' }
]


export const ReferralPartnerPage = () => {

    return (
        <Fragment>
            <div style={{ width: '30%', margin: '10px' }}>
                <FilterableReferralOwnerTable leads={MOCK_LEADS}/>
            </div>
            <div>
                <NewLead referralOwnerName='test' />
            </div>

        </Fragment>
    )
}
