import React, { Fragment } from 'react'

interface FormTitleProps {
    referralOwnerName: string
}


export const FormTitle = (props:FormTitleProps) => {
    const referralOwnerName = props.referralOwnerName
    
    
    return (
        <Fragment>

            <h1>New lead for {referralOwnerName}</h1>
            
        </Fragment>
    )
}
