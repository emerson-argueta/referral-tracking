import { Client } from "./Client"
import { LeadId } from "./LeadId"
import { Project } from "./Project"
import { ReferralOwner } from "./ReferralOwner"
import { ReferralPartner } from "./ReferralPartner"

export interface LeadProps {
    referralPartner: ReferralPartner;
    referralOwner: ReferralOwner;
    client: Client;
    dateTime: Date;
    project: Project;
}

export class Lead {
    id?: string;
    props: LeadProps

    get leadId(): LeadId {
        return LeadId.create({ id: this.id })
    }
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