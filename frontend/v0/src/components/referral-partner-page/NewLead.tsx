import React, { useState } from 'react'
import { Lead } from './filterable-referral-owner-table/types/Leads'
import { FormTitle } from './new-lead/FormTitle'
import { NewLeadForm } from './new-lead/NewLeadForm'
import { InputLead } from './new-lead/types/InputLead'
import { inputLead } from './state/actions/ReferralPartnerPageActionCreators'
import { useReferralPartnerPageContext } from './state/ReferralPartnerPageContext'

interface NewLeadProps {
}

const MOCK_REFERRAL_PARTNER_ID = '1234!@#$!@#$^%$#1'

export const NewLead = (props: NewLeadProps) => {
    const [referralPartnerPageState, referralPartnerPageDispatch] = useReferralPartnerPageContext()
    const { selectedReferralOwnerUsername } = referralPartnerPageState


    const handleInputLead = async (newLead: InputLead) => {
        newLead.referralOwnerUsername = selectedReferralOwnerUsername || ''
        newLead.referralPartnerId = MOCK_REFERRAL_PARTNER_ID
        referralPartnerPageDispatch(
            await inputLead(newLead)
        )
        console.log('Handling input lead new lead==>', newLead)
    }
    return (
        <div>
            <FormTitle referralOwnerName={selectedReferralOwnerUsername || ''} />
            <NewLeadForm
                handleInputLead={handleInputLead}
            />
        </div>
    )
}


