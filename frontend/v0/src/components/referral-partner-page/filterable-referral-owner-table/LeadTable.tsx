import React from 'react'
import { LeadRow } from './LeadRow'
import { Leads } from './types/Leads'


interface LeadTableProps {
    leads: Leads
}

export const LeadTable = (props: LeadTableProps) => {

    let rows: Array<JSX.Element> = []

    props.leads.forEach((lead) => {
        const leadRow = (<LeadRow lead={lead} />)
        rows.push(leadRow)
    })

    const headerTitles = extractHeaderTitles(props.leads[0])
    console.log(props.leads[0], headerTitles);


    const tableHeader = (
        <thead>
            <tr>
                {headerTitles.map(title => { return (<th>{title}</th>) })}
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


const extractHeaderTitles = (tableObject: { [index: string]: any }): Array<string> => {
    const firstLevelAttributes = Object.getOwnPropertyNames(tableObject)

    const headerTitles = firstLevelAttributes.map(firstAttribute => {
        const secondLevelObject = tableObject[firstAttribute]
        const secondLevelAttributes = Object.getOwnPropertyNames(secondLevelObject)
        return secondLevelAttributes.map(secondAttribute => {
            const result = cleanTitle(firstAttribute, secondAttribute)
            return result;
        })

    }).flat()

    return headerTitles
}

const cleanTitle = (...attributes: Array<string>): string => {
    let result = ''
    attributes.forEach(a => {
        const attribute = a.charAt(0).toUpperCase() + a.slice(1)
        result += attribute + " "
    })
    return result
}