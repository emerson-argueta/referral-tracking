import React, { Fragment } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ReferralOwner, ReferralOwners } from './types/ReferralOwners';



interface DropdownSearchBarProps {
    searchText: string
    referralOwners?: ReferralOwners
    handleGetLeadsForReferralOwner: (referralOwnerUsername: string) => void
    handleSetSelectedReferralOwnerUsername: (referralOwnerUsername: string) => void
}

export const DropdownSearchBar = (props: DropdownSearchBarProps) => {
    return (
        <Fragment>
            <form >
                <Autocomplete
                    onChange={(event, newValue) => {

                        newValue && props.handleGetLeadsForReferralOwner(newValue.username)
                        newValue && props.handleSetSelectedReferralOwnerUsername(newValue.username)
                    }}
                    options={props.referralOwners || []}
                    id={'someId'}
                    getOptionLabel={(option) => option.username}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}

                />
            </form>
        </Fragment>
    )
}
