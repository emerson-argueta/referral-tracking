import React, { Fragment } from 'react'
import { ReferralOwnerLead } from './types/Leads'

interface LeadRowProps {
    lead: ReferralOwnerLead
}
export const LeadRow = (props: LeadRowProps) => {


    return (
        <Fragment>
            <tr>
                {Object.getOwnPropertyNames(props.lead).map(propertyName => {
                    const leadWithForcedType: { [index: string]: { [index: string]: string } } = props.lead as any
                    const vals = Object.values(leadWithForcedType[propertyName])
                    return vals.map(v => (<td>{v}</td>))
                }).flat()}
            </tr>
        </Fragment>
    )
}
