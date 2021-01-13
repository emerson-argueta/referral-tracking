import React, { Fragment, useState } from 'react'
import { InputLead } from './types/InputLead'


interface NewLeadFormProps {
    handleInputLead: (newLead: InputLead) => void
}
export const NewLeadForm = (props: NewLeadFormProps) => {

    const [formData, setFormData] = useState({} as { [key: string]: string })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputID = e.target.id
        const inputValue = e.target.value

        const newFormData = {
            ...formData,
            [inputID]: inputValue
        }
        setFormData(newFormData)
    }
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newLead: InputLead = {
            projectTitle: formData?.projectTitle || '',
            projectEstimate: formData?.projectEstimate || '',
            clientName: formData?.clientName || '',
            clientEmail: formData?.clientEmail || '',
        }

        props.handleInputLead(newLead)
    }

    return (
        <Fragment>
            <form onSubmit={handleOnSubmit}>
                <input id='clientName' onChange={handleOnChange} type="text" placeholder='Client name' />
                <br></br>
                <input id='clientEmail' onChange={handleOnChange} type="text" placeholder='Client email' />
                <br></br>
                <input id='projectTitle' onChange={handleOnChange} type="text" placeholder='Project title' />
                <br></br>
                <input id='projectEstimate' onChange={handleOnChange} type="number" placeholder='Estimate' />
                <br></br>
                <button>Submit</button>
            </form>

        </Fragment>

    )
}
