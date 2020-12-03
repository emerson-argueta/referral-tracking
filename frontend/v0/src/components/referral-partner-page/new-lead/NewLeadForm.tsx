import React, { Fragment } from 'react'

export const NewLeadForm = () => {
    
    
    return (
        <Fragment>
            <form>
                <input type="text" placeholder='Client name' />
                <br></br>
                <input type="text" placeholder='Client email' />
                <br></br>
                <input type="text" placeholder='Project title' />
                <br></br>
                <input type="number" placeholder='Estimate' />
                <br></br>
                <button>Submit</button>
                
            </form>

        </Fragment>

    )
}
