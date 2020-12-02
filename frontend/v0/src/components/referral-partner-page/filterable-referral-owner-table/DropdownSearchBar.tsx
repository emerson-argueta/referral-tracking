import React, { Fragment } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



interface DropdownSearchBarProps {
    searchText: string
    leads: Array<any>
}

export const DropdownSearchBar = (props: DropdownSearchBarProps) => {
    return (
        <Fragment>
            <form >
                <Autocomplete
                    onChange={(event, newValue) => { console.log(newValue) }}
                    options={props.leads}
                    id={'someId'}
                    getOptionLabel={(option) => option.referralOwnerName}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}

                />
            </form>
        </Fragment>
    )
}
