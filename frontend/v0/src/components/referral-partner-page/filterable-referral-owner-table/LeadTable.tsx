import React from 'react'
import { LeadRow } from './LeadRow'


interface LeadTableProps {
    leads: Array<any>
}

export const LeadTable = (props: LeadTableProps) => {

    let rows: Array<JSX.Element> = []

    props.leads.forEach((lead: any) => {
        const leadRow = (<LeadRow lead={lead} />)
        rows.push(leadRow)
    })

    const tableHeader = (
        <thead>
            <tr>
                <th>{'Lead Project Title'}</th>
                <th>{'Lead Project Estimate'}</th>
                <th>{'Customer Contact'}</th>
            </tr>
        </thead>
    )
    const tableBody = (
        <tbody>
            {rows}
        </tbody>
    )

    return (
        <div>
            <table>
                {tableHeader}
                {tableBody}
            </table>
        </div>
    )
}
