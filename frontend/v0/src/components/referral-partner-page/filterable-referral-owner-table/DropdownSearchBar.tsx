import React, { Fragment } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { ReferralOwners } from './types/ReferralOwners';



interface DropdownSearchBarProps {
    searchText: string
    referralOwners: ReferralOwners
}

export const DropdownSearchBar = (props: DropdownSearchBarProps) => {
    return (
        <Fragment>
            <form >
                <Autocomplete
                    onChange={(event, newValue) => { console.log(newValue) }}
                    options={props.referralOwners}
                    id={'someId'}
                    getOptionLabel={(option) => option.username}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}

                />
            </form>
        </Fragment>
    )
}
