import React, { Fragment } from 'react'
import { Leads } from './referral-partner-page/filterable-referral-owner-table/types/Leads'
import { ReferralOwners } from './referral-partner-page/filterable-referral-owner-table/types/ReferralOwners'
import { FilterableReferralOwnerTable } from './referral-partner-page/FilterableReferralOwnerTable'
import { NewLead } from './referral-partner-page/NewLead'

const MOCK_LEADS: Leads =
    [
        { project: { title: 'Project0', estimate: '141.25' }, client: { name: 'customer1', email: 'customer1@gmail.com' }, lead: { dateTime: '12-12-12', status: 'open' } },
        { project: { title: 'Project1', estimate: '141.25' }, client: { name: 'customer2', email: 'customer2@gmail.com' }, lead: { dateTime: '12-11-12', status: 'open' } },
        { project: { title: 'Project2', estimate: '141.25' }, client: { name: 'customer3', email: 'customer3@gmail.com' }, lead: { dateTime: '12-10-12', status: 'open' } },
        { project: { title: 'Project3', estimate: '141.25' }, client: { name: 'customer4', email: 'customer4@gmail.com' }, lead: { dateTime: '12-09-12', status: 'open' } },
        { project: { title: 'Project4', estimate: '141.25' }, client: { name: 'customer5', email: 'customer5@gmail.com' }, lead: { dateTime: '12-08-12', status: 'open' } },
        { project: { title: 'Project5', estimate: '141.25' }, client: { name: 'customer6', email: 'customer6@gmail.com' }, lead: { dateTime: '12-07-12', status: 'open' } },
        { project: { title: 'Project6', estimate: '141.25' }, client: { name: 'customer7', email: 'customer7@gmail.com' }, lead: { dateTime: '12-06-12', status: 'open' } }
    ]


const MOCK_REFERRAL_OWNERS: ReferralOwners = [
    { username: 'referralOwner1' },
    { username: 'referralOwner2' },
    { username: 'referralOwner3' },
    { username: 'referralOwner4' },
    { username: 'referralOwner5' },
    { username: 'referralOwner6' },
    { username: 'referralOwner7' }
]


export const ReferralPartnerPage = () => {
    // call the getAllReferralOwners api --> referralOwners as response
    // backend 1. /api/v1/referralOwner ---> { referralOwners: Array< {username:string} > }
    const referralOwners = {}
    // call the getLeadsByReferralOwnerUsername api --> leads as response
    // backend 2. /api/v1/referralOwner/lead?referralOwnerUsername=[username] ---> { leads: Array< { project:{estimate:string,title:string}, lead:{dateTime:string,status:string}, client:{name:string,email:string} } > }
    // request referralOwners --> { referralOwnerUsername: string }    
    const leads = {}


    return (
        <Fragment>
            <div style={{ width: '30%', margin: '10px' }}>
                <FilterableReferralOwnerTable referralOwners={MOCK_REFERRAL_OWNERS} leads={MOCK_LEADS} />
            </div>
            <div>
                <NewLead referralOwnerName='test' />
            </div>

        </Fragment>
    )
}
