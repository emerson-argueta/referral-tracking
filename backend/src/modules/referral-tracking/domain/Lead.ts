import { Client } from "./Client"
import { LeadId } from "./LeadId"
import { LeadStatus } from "./LeadStatus"
import { Project } from "./Project"
import { ReferralOwner } from "./ReferralOwner"
import { ReferralPartner } from "./ReferralPartner"

export interface LeadProps {
    referralPartner?: ReferralPartner;
    referralOwner?: ReferralOwner;
    client?: Client;
    dateTime: Date;
    project?: Project;
    status: LeadStatus;
}

export class Lead {
    private id?: string;
    private props: LeadProps

    get leadId(): LeadId {
        return LeadId.create({ id: this.id })
    }
    get dateTime(): Date {
        return this.props.dateTime
    }

    get project(): Project | undefined {
        return this.props.project
    }

    public get status(): LeadStatus {
        return this.props.status
    }


    private constructor(props: LeadProps, id?: string) {
        this.props = props
        this.id = id

    }

    public static create(props: LeadProps, id?: string): Lead {
        const lead = new Lead(props, id)

        return lead
    }
}