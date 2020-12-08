import { Client } from "./Client"
import { Project } from "./Project"
import { ReferralOwner } from "./ReferralOwner"
import { ReferralPartner } from "./ReferralPartner"

export interface LeadProps {
    leadId?: string;
    ReferralPartner: ReferralPartner;
    ReferralOwner: ReferralOwner;
    client: Client;
    dateTime: Date;
    project: Project;
}

export class Lead {
    props: LeadProps

    get dateTime(): Date {
        return this.props.dateTime
    }

    get project(): Project {
        return this.props.project
    }



    private constructor(props: LeadProps) {
        this.props = props

    }

    public static create(props: LeadProps): Lead {
        const lead = new Lead(props)

        return lead
    }
}