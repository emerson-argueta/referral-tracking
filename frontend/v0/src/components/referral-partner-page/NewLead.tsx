import React from 'react'
import { FormTitle } from './new-lead/FormTitle'
import { NewLeadForm } from './new-lead/NewLeadForm'

interface NewLeadProps {
    referralOwnerName : string 
}


export const NewLead = (props:NewLeadProps) => {
    const name = props.referralOwnerName
    
    return (
        <div>
            <FormTitle referralOwnerName={name}  />
            <NewLeadForm />
        </div>
    )
}
