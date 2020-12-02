import React, { Fragment } from 'react'

interface LeadRowProps {
    lead: any
}
export const LeadRow = (props: LeadRowProps) => {
    const leadTitle = props.lead.title
    const leadEstimate = props.lead.estimate
    const customerContact = props.lead.customerEmail


    return (
        <Fragment>
            <tr>
                <td>{leadTitle}</td>
                <td>{leadEstimate}</td>
                <td>{customerContact}</td>
            </tr>
        </Fragment>
    )
}
