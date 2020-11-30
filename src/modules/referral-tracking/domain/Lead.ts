import { Project } from "./Project"

interface LeadProps {
    leadId: string;
    referralPartnerId: string;
    referralOwnerId: string;
    customerId: string;
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